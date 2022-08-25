// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  'eventsCausingActions': {
    setCredential:
      | 'GET_VC_RESPONSE'
      | 'STORE_RESPONSE'
      | 'CREDENTIAL_DOWNLOADED';
    updateVc:
      | 'STORE_RESPONSE'
      | 'CREDENTIAL_DOWNLOADED'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]';
    storeContext:
      | 'CREDENTIAL_DOWNLOADED'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]';
    logDownloaded: 'CREDENTIAL_DOWNLOADED';
    setTag: 'SAVE_TAG';
    markVcValid: 'done.invoke.vc-item.verifyingCredential:invocation[0]';
    logError: 'error.platform.vc-item.verifyingCredential:invocation[0]';
    setOtp: 'INPUT_OTP';
    clearOtp:
      | 'DISMISS'
      | 'STORE_RESPONSE'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]'
      | 'error.platform.vc-item.verifyingCredential:invocation[0]'
      | ''
      | 'done.invoke.vc-item.requestingOtp:invocation[0]'
      | 'error.platform.vc-item.requestingLock:invocation[0]';
    clearTransactionId:
      | 'DISMISS'
      | 'STORE_RESPONSE'
      | 'done.invoke.vc-item.verifyingCredential:invocation[0]'
      | 'error.platform.vc-item.verifyingCredential:invocation[0]'
      | '';
    setLock: 'done.invoke.vc-item.requestingLock:invocation[0]';
    setOtpError: 'error.platform.vc-item.requestingLock:invocation[0]';
    requestVcContext: 'xstate.init';
    requestStoredContext: 'REFRESH' | 'GET_VC_RESPONSE';
    storeTag: 'SAVE_TAG';
    setTransactionId: 'LOCK_VC' | 'UNLOCK_VC';
    storeLock: 'done.invoke.vc-item.requestingLock:invocation[0]';
  };
  'internalEvents': {
    'done.invoke.vc-item.verifyingCredential:invocation[0]': {
      type: 'done.invoke.vc-item.verifyingCredential:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.vc-item.verifyingCredential:invocation[0]': {
      type: 'error.platform.vc-item.verifyingCredential:invocation[0]';
      data: unknown;
    };
    '': { type: '' };
    'done.invoke.vc-item.requestingOtp:invocation[0]': {
      type: 'done.invoke.vc-item.requestingOtp:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.vc-item.requestingLock:invocation[0]': {
      type: 'error.platform.vc-item.requestingLock:invocation[0]';
      data: unknown;
    };
    'done.invoke.vc-item.requestingLock:invocation[0]': {
      type: 'done.invoke.vc-item.requestingLock:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
    'done.invoke.checkStatus': {
      type: 'done.invoke.checkStatus';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.checkStatus': {
      type: 'error.platform.checkStatus';
      data: unknown;
    };
    'done.invoke.downloadCredential': {
      type: 'done.invoke.downloadCredential';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'error.platform.downloadCredential': {
      type: 'error.platform.downloadCredential';
      data: unknown;
    };
  };
  'invokeSrcNameMap': {
    checkStatus: 'done.invoke.checkStatus';
    downloadCredential: 'done.invoke.downloadCredential';
    verifyCredential: 'done.invoke.vc-item.verifyingCredential:invocation[0]';
    requestOtp: 'done.invoke.vc-item.requestingOtp:invocation[0]';
    requestLock: 'done.invoke.vc-item.requestingLock:invocation[0]';
  };
  'missingImplementations': {
    actions: 'logError';
    services: never;
    guards: never;
    delays: never;
  };
  'eventsCausingServices': {
    checkStatus: 'STORE_RESPONSE';
    downloadCredential: 'DOWNLOAD_READY';
    verifyCredential: 'VERIFY' | '';
    requestOtp: 'LOCK_VC' | 'UNLOCK_VC';
    requestLock: 'INPUT_OTP';
  };
  'eventsCausingGuards': {
    hasCredential: 'GET_VC_RESPONSE' | 'STORE_RESPONSE';
    isVcValid: '';
  };
  'eventsCausingDelays': {};
  'matchesStates':
    | 'checkingVc'
    | 'checkingStore'
    | 'checkingServerData'
    | 'checkingServerData.checkingStatus'
    | 'checkingServerData.downloadingCredential'
    | 'idle'
    | 'editingTag'
    | 'storingTag'
    | 'verifyingCredential'
    | 'checkingVerificationStatus'
    | 'invalid'
    | 'invalid.otp'
    | 'invalid.backend'
    | 'requestingOtp'
    | 'acceptingOtpInput'
    | 'requestingLock'
    | 'lockingVc'
    | {
        checkingServerData?: 'checkingStatus' | 'downloadingCredential';
        invalid?: 'otp' | 'backend';
      };
  'tags': never;
}
