import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#1E1E1E',
        borderRadius: 8,
        padding: 8,
        marginBottom: 12
    },
    wrapper: {
        flexDirection: 'row'
    },
    image: {
        width: 80,
        height: 62,
        borderRadius: 4
    },
    newDetailsContainer: {
        marginLeft: 8
    },
    newsDetailsTitle: {
        fontSize: 12,
        color: '#888888',
        letterSpacing: -0.41,
        marginTop: 4
    },
    newsDetailsDescription: {
        marginTop: 4,
        fontSize: 16,
        letterSpacing: -0.41,
        color: '#E8E8E8',
    },
    newsDateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 13
    },
    newsDate: {
        fontSize: 10,
        letterSpacing: -0.41,
        color: '#888888',

    },
    favoriteButton: {
        padding: 4
    },
    favoriteIcon: {
        width: 10.5,
        height: 13.5
    },
});