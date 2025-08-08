import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 8,
        borderRadius: 8,
        marginBottom: 12,
        backgroundColor: '#1E1E1E',
    },
    image: {
        width: '100%',
        height: 108,
        borderRadius: 4
    },
    title: {
        fontSize: 14,
        marginTop: 8,
        color: '#888888',
        letterSpacing: -0.41,
    },
    description: {
        marginTop: 8,
        fontSize: 16,
        color: '#E8E8E8',
        letterSpacing: -0.41,
    },
    newsDateContainer: {
        marginTop: 13,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    newsDate: {
        fontSize: 10,
        color: '#888888',
        letterSpacing: -0.41,
    },
    favoriteButton: {
        paddingLeft: 8,
        paddingRight: 0,
        paddingVertical: 8,
    },
    favoriteIcon: {
        width: 10.5,
        height: 13.5
    },
});