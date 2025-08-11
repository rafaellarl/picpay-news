import Analytics from '@react-native-firebase/analytics';

/*
    Melhorias: Fazer o uso de tipagem mais restrita (ex: union types ou enums) para limitar os valores possíveis de `screenName` e `flow`.
    Isso ajuda a evitar erros de digitação e torna o código mais seguro e fácil de manter.
*/
interface IScreenView {
  screenName: string;
  flow: string;
}

interface ISelectContent extends IScreenView {
  contentType: string;
}

interface IException extends IScreenView {
  description: string;
  fatal?: boolean;
}

interface ISuccess extends IScreenView {
  description: string;
}

interface ISelectAds extends IScreenView {
  idAds: string;
}

/*
    Decisão: Optei por manter funções separadas para cada tipo de evento, 
    mesmo sendo possível consolidar em uma única função com `eventName` como parâmetro.
    Essa abordagem reduz o risco de envio incorreto de eventos e melhora a legibilidade 
    e manutenção do código em projetos maiores.
*/
export default class FirebaseAnalytics {
  static saveScreenView = async ({screenName, flow}: IScreenView) => {
    const parameters = {
      flow,
      screen_name: screenName,
    };

    Analytics().logEvent('screen_view', parameters);
  };

  static saveSelectContent = async ({
    screenName,
    flow,
    contentType,
  }: ISelectContent) => {
    const parameters = {
      flow,
      screen_name: screenName,
      content_type: contentType,
    };

    Analytics().logEvent('select_content', parameters);
  };

  static saveEventException = async ({
    flow,
    screenName,
    fatal = false,
    description = '',
  }: IException) => {
    const parameters = {
      flow,
      fatal: fatal,
      screen_name: screenName,
      description: description,
    };
    Analytics().logEvent('exception', parameters);
  };

  static saveEventSuccess = async ({
    flow,
    screenName,
    description,
  }: ISuccess) => {
    const parameters = {
      flow,
      description,
      screen_name: screenName,
    };
    Analytics().logEvent('success', parameters);
  };

  static saveEventSelectAds = async ({flow, idAds, screenName}: ISelectAds) => {
    const parameters = {
      flow,
      id_ads: idAds,
      screen_name: screenName,
    };
    Analytics().logEvent('select_content', parameters);
  };
}
