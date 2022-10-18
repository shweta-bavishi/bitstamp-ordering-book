import React from 'react';
import {Table} from '../common';
import {WebSocketComponent} from './';
import {Spinner} from '../common';
import {connect} from 'react-redux';

const BitStampTable = ({data}) => {
  return (
    <>
      <WebSocketComponent />
      {data.length ? (
        <Table columns={['Bids', 'Asks']} data={data} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  data: state.bids.data,
});

export default connect(mapStateToProps, null)(BitStampTable);
