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
            <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
            <Card.Content>
              <Title>Card title</Title>
              <Paragraph>Card content</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            <Card.Actions>
              <PaperButton>Cancel</PaperButton>
              <PaperButton>Ok</PaperButton>
            </Card.Actions>
          </Card>
        </Card.Content>
      </Card>
    </View>
  )
}
