import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions
} from 'react-native';
import Emoticons from 'react-native-emoticons';
const { height, width } = Dimensions.get("window");
console.disableYellowBox = true;
export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: [
        {id:1, date:"9:50 am", type:'out',  message: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet", avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"},
        {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"},
        {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"},
        {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"},
        {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"},
        {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"},
        {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"},
        {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"},
        {id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"},
        {id:10, date:"9:50 am", type:'in',  message: "L",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"}
      ].reverse(),
      showMic: true,
      showEmoji: false,
      showAttachment: false,
      height:0,
      voiceToText: null,
      status: "",
    };
  }
  onMsgLongClick = () => {
    <View style={[styles.balloon]}>
    <Text>This message has been deleted</Text>
  </View>
  }
  onMsgClick = () => {
    console.log("Click")
  }
  onAvatarClick = () => {
    console.log("Avatar Click")
  }
  onLongAvatarClick = () => {
    console.log("Avatar Long Click")
  }
  renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }
  addMessage =() => {

  }
  renderImage() {
    if (this.state.showMic) {
      return (
        <TouchableOpacity
          // onPress={() => this.openMic()}
          // disabled={!this.state.status === ""}
        >
          <Image style={styles.micIcon} source={require("../test/img/mic.png")} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress ={this.appendMessage}>
            <Image style={styles.sendIcon} source={require("../test/img/send_white.png")} />
        </TouchableOpacity>
      );
    }
  }

 renderMessageBubble = (item, inMessage) => {
  let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
  return(
      <View style={[styles.item, itemStyle]}>
            {inMessage
            ?                 
              <TouchableOpacity onLongPress={this.onMsgLongClick} onPress={this.onMsgClick}>
              <View style={[styles.balloon]}>
                <Text>{item.message}</Text>
              </View>
              <View style={{borderWidth: 3,borderColor: "black"}}>
              {this.renderDate(item.date)}
              </View>
              </TouchableOpacity>
            
            :<TouchableOpacity onLongPress={this.onMsgLongClick} onPress={this.onMsgClick} style={{flexDirection: "row"}}>
            <View style={{ borderWidth: 3, borderColor: "black",alignSelf:"flex-end"}}>
              {this.renderDate(item.date)}
            </View>
            <View style={[styles.balloon]}>
              <Text>{item.message}</Text>
            </View>
            </TouchableOpacity>
              }
          </View>
    )
}

renderAvatar = (item, inMessage) => {
  return(
    <TouchableOpacity onPress={this.onAvatarClick} onLongPress={this.onLongAvatarClick} style={styles.avatarContainer}>
      <Image source={require("../test/img/avatar.png")} style={inMessage ? styles.avatar : styles.avataro} />
    </TouchableOpacity>
  )
}


  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          inverted
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            console.log(item);
            const item = message.item;
            let inMessage = item.type === 'in';
            return (
              <View style={{flexDirection: 'column-reverse',borderWidth: 3, borderColor: "red"}} >
                {this.renderAvatar(item, inMessage)}
                {this.renderMessageBubble(item, inMessage)}
            </View>
            )
          }}/>
        <View style={{ height: 60 }} />
        {this.state.showAttachment ? (
          <View style={styles.attachView}>
              <View style={styles.styleIconView}>
                  <Image style={styles.documentIcon} source={require("../test/img/document.png")} />
              </View>

              <View style={styles.styleIconView}>
                <Image style={styles.videoIcon} source={require("../test/img/videobg.png")} />
              </View>

              <View style={styles.styleIconView}>
                <Image style={styles.imageIcon} source={require("../test/img/image.png")} />
              </View>

              <View style={styles.styleIconView}>
                <Image
                  style={styles.audioIcon}
                  source={require("../test/img/record_audio.png")}/>
              </View>
          </View>
        ) : null}

        {this.state.showEmoji ? (
          <View style={styles.emoticonsView}>
          <Emoticons
              ref={data => (this.emoticons = data)}
              onEmoticonPress={data => this.attachEmoji(data)}
              onBackspacePress={this.onBackspacePress}
              show
              concise={false}
              showHistoryBar={false}
              showPlusBar={false}
            /> 
          </View>
        ) : null}
        <View style={styles.commentSectionView}>
          <View style={styles.commentSectionFlowDirection}>
            <View
              style={{
                flex: 9,
                backgroundColor: "white",
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "flex-end"
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  this.setState({ showEmoji: !this.state.showEmoji, showAttachment: false })
                }
              >
                <View style={styles.styleIconViewEmoji}>
                  <Image style={styles.emojiIcon} source={require("../test/img/emoji.png")} />
                </View>
              </TouchableOpacity>
              <ScrollView>
                <TextInput {...this.props}
                  ref={txtInput => (this.txtInput = txtInput)}
                  style={[styles.textInp, { height: Math.max(35, this.state.height) }]}
                  underlineColorAndroid="transparent"
                  placeholder="Write a message"
                  multiline
                  onChangeText={value => this.setState({voiceToText: value, showMic: value.trim().length === 0})}
                  onFocus={() => this.setState({ showEmoji: false, showAttachment: false })}
                  onContentSizeChange={event => {
                    this.setState({
                      height: event.nativeEvent.contentSize.height
                    });
                  }}
                  value={ (this.state.status === "") ? this.state.voiceToText : this.state.status
                  }
                  textAlignVertical={"top"}
                  selectionColor="gray"
                  editable={this.state.status === ""}
                />
              </ScrollView>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ showAttachment: !this.state.showAttachment, showEmoji: false })
                }
              >
                <View style={styles.styleIconViewAttachment}>
                  <Image
                    style={styles.attachmentIcon}
                    source={require("../test/img/attachment.png")}
                  />
                </View>
              </TouchableOpacity>
            </View>
              <View style={[styles.sendButton, { backgroundColor: this.state.showMic ? '#ffffff' : '#ea873e'}]}>{this.renderImage()}</View>
          </View>
        </View>
      </View>
    );
  }






// ***********************************************Logical Part Start**********************************************

appendMessage = () => {
  let newMessage = {id:11, date:"9:50 am", type:'in',  message: "This is a new message",avatar: "/home/guptaharsh/Desktop/Sample/test/StarRating/star-filled.png"}

  this.setState({data: [newMessage, ...this.state.data]})


}

updateMessage = (message) => {

}

// *************************************************Logical Part End***********************************************

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
