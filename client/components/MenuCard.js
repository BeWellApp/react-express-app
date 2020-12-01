import React from "react";
import { View } from "react-native";


import { Avatar, Button as PaperButton, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export default function MenuCard() {
  return (
    <View>
      <Card>
        <Card.Content>
          <Card elevation={5}>
            <Card.Content>
              <Title>מידע על גופף</Title>
              {/* <Paragraph></Paragraph> */}
            </Card.Content>
            <Card.Cover source={{ uri: "https://www.seekpng.com/png/full/378-3789484_sexy-woman-icon-body-lady-icon-png.png" }} />
            <Card.Actions>
              <PaperButton>קרא עוד</PaperButton>
              <PaperButton>שמע</PaperButton>
            </Card.Actions>
          </Card>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card elevation={5}>
            <Card.Content>
              <Title>איך לדבר על זה</Title>
              {/* <Paragraph></Paragraph> */}
            </Card.Content>
            <Card.Cover source={{ uri: "https://icons.iconarchive.com/icons/inipagi/job-seeker/512/conversation-icon.png" }} />
            <Card.Actions>
              <PaperButton>קרא עוד</PaperButton>
              <PaperButton>שמע</PaperButton>
            </Card.Actions>
          </Card>
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Card elevation={5}>
            <Card.Content>
              <Title>איך תשמרי על עצמך</Title>
              {/* <Paragraph></Paragraph> */}
            </Card.Content>
            <Card.Cover source={{ uri: "https://cdn4.iconfinder.com/data/icons/healthy-life-line-color-live-long-and-prosper/512/Right_birth_control-512.png" }} />
            <Card.Actions>
              <PaperButton>קרא עוד</PaperButton>
              <PaperButton>שמע</PaperButton>
            </Card.Actions>
          </Card>
        </Card.Content>
      </Card>
      <Card>
      </Card>
    </View>
  )
}
