import React from 'react';
import { StyleSheet, View, Text, Dimensions,Image } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');

const DATA = [
  {
    coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920321-2357b680-4900-11ea-89d5-2e8cbecec9f6.jpg',
    cornerLabelColor: '#FFD300',
    cornerLabelText: 'GOTY',
  },
  {
    coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920358-336f9600-4900-11ea-8eec-cc919b991e90.jpg',
    cornerLabelColor: '#0080ff',
    cornerLabelText: 'NEW',
  },
  {
    coverImageUri: 'https://user-images.githubusercontent.com/6414178/73927874-25744200-490d-11ea-940f-db3e5dbd8b2b.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: '-75%',
  },
  {
    coverImageUri: 'https://user-images.githubusercontent.com/6414178/73920399-45e9cf80-4900-11ea-9d5b-743fe5e8b9a4.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: '-20%',
  },
];

const AdvanceCarousel = (props) => {
  const renderItem = data => (
    <View
      key={data}
      style={styles.cardContainer}>
      <View
        style={styles.cardWrapper}>
          
        <Image
          style={styles.card}
          source={{ uri: data }}
        />
        <View
          style={[
            styles.cornerLabel,
          ]}
        >

        </View>

      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={props.images}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    width:"80%",
    height:'50%'
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    alignSelf:'auto',
    width
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  },
  card: {
    width: 400 ,
    height: 200 ,
    alignContent:'center',
    alignItems:'center',
    justifyContent:'center'
  },
  
});

export default AdvanceCarousel;