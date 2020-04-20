import React, { useState, useEffect, useContext } from 'react';
import imgSync from 'img/sync.png';
import { addOnlineStatusObserver } from 'common-tools/';
import { synchronizeQueen } from 'common-tools/synchronization';
import D from 'i18n';
import { store } from 'common-tools/store';
import Loader from '../loader';
import Result from '../syncResult';

const Synchronize = ({ disabled = false }) => {
  const [loading, setLoading] = useState(false);
  const [syncResult, setSyncResult] = useState(undefined);

  const [init, setInit] = useState(false);
  const [status, setStatus] = useState(navigator.onLine);

  const { dispatch, authInitialized } = useContext(store);

  const handleQueenEvent = event => {
    const { type, command, state } = event.detail;
    if (type === 'QUEEN' && command === 'UPDATE_SYNCHRONIZE') {
      if (state === 'FAILURE') {
        // TODO : message to user
        setSyncResult(D.syncFailure);
      } else if (state === 'SUCCESS') {
        setSyncResult(D.syncSuccess);
      }

      setTimeout(() => setLoading(false), 3000);
    }
  };

  useEffect(() => {
    if (!init) {
      addOnlineStatusObserver(s => {
        setStatus(s);
      });
      setInit(true);
    }
  }, [init]);

  useEffect(() => {
    window.addEventListener('QUEEN', handleQueenEvent);
    return () => {
      window.removeEventListener('QUEEN', handleQueenEvent);
    };
  });

  const syncFunction = () => {
    // call common-tools/synchronize function
    setLoading(true);
    synchronizeQueen();
    if (!authInitialized) {
      dispatch({ type: 'initAuth' });
    }
  };

  const syncOnClick = () => {
    if (!loading) {
      syncFunction();
    } else {
      console.log('offline');
    }
  };

  const close = () => setSyncResult(undefined);

  return (
    <>
      {loading && <Loader message={D.synchronizationInProgress} />}
      {!loading && syncResult && <Result messageResult={syncResult} close={close} />}

      <div className="sync" disabled={disabled}>
        <img alt="sync-logo" className={loading ? 'rotate' : ''} height="30px" src={imgSync} />
        <button type="button" disabled={disabled} onClick={() => syncOnClick()}>
          {D.synchronizeButton}
        </button>
      </div>
    </>
  );
};

export default Synchronize;
