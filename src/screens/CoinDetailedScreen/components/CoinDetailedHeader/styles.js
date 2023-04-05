import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-between",
    },
    tickerContainer: {
        flexDirection: "row",
        alignItems: "center",  
    },
    tickerTitle: {
        color: 'white',
        fontWeight: 'bold',
        marginHorizontal: 5,
        fontSize: 17,
    },
    rankContainer: {
        backgroundColor: '#585858',
        borderRadius: 5,
        paddingHorizontal:5,
        marginRight: 5,
        paddingVertical: 2,
      },
    });

export default styles;