import React, {useCallback} from 'react';
import {View} from 'react-native';
import WS from 'react-native-websocket';
import {connect} from 'react-redux';
import {WEBSOCKET_URL, subscribeMsg} from '../utils/socketUtils';
import {throttleMethod} from '../utils/throttle';
import {setBids} from '../store/actions';

const WebSocket = ({conversionValue, loadData}) => {
  const onMessage = useCallback(
    throttleMethod(function (event) {
      const json = JSON.parse(event.data);
      try {
        if ((json.event = 'data')) {
          loadData(json.data);
        }
      } catch (err) {
        console.log(err);
      }
    }, 5000),
    [],
  );

  return (
    <View style={{flex: 1}} key={conversionValue}>
      <WS
        ref={ref => {
          this.ws = ref;
        }}
        url={WEBSOCKET_URL}
        onOpen={() =>
          this.ws.send(JSON.stringify(subscribeMsg(conversionValue)))
        }
        onMessage={onMessage}
        onError={console.log}
        onClose={console.log}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  conversionValue: state.bids.conversionType,
});

const mapDispatchToProps = dispatch => {
  return {
    loadData: data => dispatch(setBids(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WebSocket);
