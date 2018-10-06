import React from "react";
import {Text, View, Image, StyleSheet, Dimensions, TouchableOpacity
} from "react-native";
const { height, width } = Dimensions.get("window");

export default MessageBubble = props => {

    const renderDate = (date) => {
        return(
            <Text style={styles.time}>
                {date}
            </Text>
        )
    }

    const renderIncomingMessage = (item) => {
        return(
            <TouchableOpacity onLongPress={()=>props.onMsgLongClick(item)} onPress={()=>props.onMsgClick(item)}>
                <View style={[styles.balloon]}>
                    <Text>{item.message}</Text>
                </View>
                <View style={{borderWidth: 3,borderColor: "black"}}>
                {renderDate(item.date)}
                </View>
            </TouchableOpacity>
        )
    }

    const renderOutgoingMessage = (item) => {
        return(
            <TouchableOpacity onLongPress={()=>props.onMsgLongClick(item)} onPress={()=>props.onMsgClick(item)} style={{flexDirection: "row"}}>
                <View style={{ borderWidth: 3, borderColor: "black",alignSelf:"flex-end"}}>
                    {renderDate(props.item.date)}
                </View>
                <View style={[styles.balloon]}>
                    <Text>{props.item.message}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    let inMessage = MessageHelpers.isMessageIncoming(props.item)
    let itemStyle = inMessage ? styles.itemIn : styles.itemOut;

    return(
        <View style={[styles.item, itemStyle]}>
            {inMessage ? renderIncomingMessage(props.item) : renderOutgoingMessage(props.item)}
        </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    list:{
      paddingHorizontal: 17,
    },
    footer:{
      flexDirection: 'column',
      height:160,
      backgroundColor: '#eeeeee',
      paddingHorizontal:10,
      padding:5,
    },
    btnSend:{
      backgroundColor:"#00BFFF",
      width:40,
      height:40,
      borderRadius:360,
      alignItems:'center',
      justifyContent:'center',
    },
    iconSend:{
      width:30,
      height:30,
      alignSelf:'center',
    },
    avatar:{
      width:45,
      height:45,
      alignSelf: 'flex-start',
  
    },
    avataro:{
      width:45,
      height:45,
      alignSelf: 'flex-end'
    },
    avatarContainer: {
      marginTop: -height*0.092,
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: 'grey',
      borderRadius:30,
      borderBottomWidth: 1,
      height:80,
      flexDirection: 'row',
      alignItems:'center',
      marginRight:10,
    },
    inputs:{
      marginLeft: 6,
      marginBottom: 5,
      width: width * 0.77,
      height: height * 0.165,
      borderColor: "grey",
      backgroundColor:"yellow",
      borderWidth: 2,
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingBottom: 24
    },
    balloon: {
      borderWidth: 2,
      borderColor: "blue",
      maxWidth: 200,
      padding: 15,
      borderRadius: 20,
    },
    itemIn: {
      alignSelf: 'flex-start',
      marginLeft: 55,
    },
    itemOut: {
      alignSelf: 'flex-end',
      marginRight: 55
    },
    time: {
      alignSelf: 'flex-end',
      margin: 15,
      fontSize:12,
      color:"#808080",
    },
    item: {
      borderWidth: 3,
      borderColor: "green",
      marginVertical: 14,
      flex: 1,
      flexDirection: 'row',
      backgroundColor:"#eeeeee",
      borderRadius:10,
      padding:5,
    },
  
    // STYLES
    attachView: {
      height: 60,
      width: width * 0.95,
      backgroundColor: '#EAEDED',
      borderRadius: 12,
      alignSelf: "center",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      bottom: 50
    },
    commentSectionView: {
      height: 48,
      width: width,
      position: "absolute",
      backgroundColor: '#EAEDED',
      bottom: 0,
      justifyContent: "center"
    },
    commentSectionFlowDirection: {
      flexDirection: "row"
    },
    styleIconViewEmoji: {
      height: height * 0.065,
      width: height * 0.07,
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 8,
      backgroundColor: "#FFFFFF",
      borderBottomLeftRadius: 50,
      borderTopLeftRadius: 50
    },
    styleIconView: {
      height: height * 0.07,
      width: height * 0.07,
      borderRadius: height * 0.04,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
      margin: 16
    },
    styleIconViewAttachment: {
      height: height * 0.065,
      width: height * 0.07,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
      borderBottomRightRadius: 50,
      borderTopRightRadius: 50
    },
    textInp: {
      width: width * 0.65,
      height: height * 0.065,
      backgroundColor: '#FFFFFF',
      borderRadius: 50,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0
    },
    sendButton: {
      width: height * 0.065,
      height: height * 0.065,
      borderColor:"transparent",
      //backgroundColor: ColorConst.BUTTON_BORDER_AND_BACKGROUND_COLOR,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: height * 0.0325,
      marginLeft: 6,
      elevation: 5,
    },
    emojiIcon: {
      height: 16.5,
      width: 16.5
    },
    attachmentIcon: {
      height: 15,
      width: 15,
      resizeMode: "contain"
    },
    micIcon: {
      height: 20,
      width: 12
    },
    sendIcon: {
      height: 15,
      width: 16
    },
    videoIcon: {
      height: 16,
      width: 24
    },
    imageIcon: {
      height: 18,
      width: 24
    },
    documentIcon: {
      height: 22,
      width: 16
    },
    audioIcon: {
      height: 27,
      width: 15
    },
    emoticonsView: {
      height: 250
    },
    
  }); 
