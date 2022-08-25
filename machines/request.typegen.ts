// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  'internalEvents': {
    'xstate.stop': { type: 'xstate.stop' };
    '': { type: '' };
    'xstate.after(CLEAR_DELAY)#clearingConnection': {
      type: 'xstate.after(CLEAR_DELAY)#clearingConnection';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  'invokeSrcNameMap': {
    checkConnection: 'done.invoke.request:invocation[0]';
    checkBluetoothService: 'done.invoke.request.checkingBluetoothService.checking:invocation[0]';
    requestBluetooth: 'done.invoke.request.checkingBluetoothService.requesting:invocation[0]';
    advertiseDevice: 'done.invoke.waitingForConnection:invocation[0]';
    exchangeDeviceInfo: 'done.invoke.request.exchangingDeviceInfo:invocation[0]';
    receiveVc: 'done.invoke.request.waitingForVc:invocation[0]';
    sendVcResponse:
      | 'done.invoke.accepted:invocation[0]'
      | 'done.invoke.request.reviewing.rejected:invocation[0]';
  };
  'missingImplementations': {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  'eventsCausingActions': {
    disconnect:
      | 'SCREEN_BLUR'
      | 'SCREEN_FOCUS'
      | 'xstate.stop'
      | 'DISMISS'
      | ''
      | 'DISCONNECT';
    setReceiverInfo: 'RECEIVE_DEVICE_INFO';
    setSenderInfo: 'EXCHANGE_DONE';
    setIncomingVc: 'VC_RECEIVED';
    removeLoggers:
      | 'SCREEN_BLUR'
      | 'SCREEN_FOCUS'
      | 'xstate.init'
      | 'xstate.after(CLEAR_DELAY)#clearingConnection'
      | 'DISMISS';
    registerLoggers: 'xstate.after(CLEAR_DELAY)#clearingConnection' | 'DISMISS';
    generateConnectionParams:
      | 'xstate.after(CLEAR_DELAY)#clearingConnection'
      | 'DISMISS';
    requestReceiverInfo: 'CONNECTED';
    requestReceivedVcs: 'ACCEPT';
    requestExistingVc: 'VC_RESPONSE';
    mergeIncomingVc: 'STORE_RESPONSE';
    prependReceivedVc: 'VC_RESPONSE';
    storeVc: 'STORE_RESPONSE';
    sendVcReceived: 'STORE_RESPONSE';
    logReceived: 'STORE_RESPONSE';
  };
  'eventsCausingServices': {
    checkConnection: 'SCREEN_BLUR' | 'SCREEN_FOCUS' | 'xstate.init';
    checkBluetoothService: 'SCREEN_FOCUS';
    requestBluetooth: 'BLUETOOTH_DISABLED';
    advertiseDevice: 'xstate.after(CLEAR_DELAY)#clearingConnection' | 'DISMISS';
    exchangeDeviceInfo: 'RECEIVE_DEVICE_INFO';
    receiveVc: 'EXCHANGE_DONE';
    sendVcResponse: 'STORE_RESPONSE' | 'REJECT' | 'CANCEL';
  };
  'eventsCausingGuards': {
    hasExistingVc: 'VC_RESPONSE';
  };
  'eventsCausingDelays': {
    CLEAR_DELAY: '';
  };
  'matchesStates':
    | 'inactive'
    | 'checkingBluetoothService'
    | 'checkingBluetoothService.checking'
    | 'checkingBluetoothService.requesting'
    | 'checkingBluetoothService.enabled'
    | 'bluetoothDenied'
    | 'clearingConnection'
    | 'waitingForConnection'
    | 'preparingToExchangeInfo'
    | 'exchangingDeviceInfo'
    | 'waitingForVc'
    | 'reviewing'
    | 'reviewing.idle'
    | 'reviewing.accepting'
    | 'reviewing.accepting.requestingReceivedVcs'
    | 'reviewing.accepting.requestingExistingVc'
    | 'reviewing.accepting.mergingIncomingVc'
    | 'reviewing.accepting.prependingReceivedVc'
    | 'reviewing.accepting.storingVc'
    | 'reviewing.accepted'
    | 'reviewing.rejected'
    | 'reviewing.navigatingToHome'
    | 'disconnected'
    | {
        checkingBluetoothService?: 'checking' | 'requesting' | 'enabled';
        reviewing?:
          | 'idle'
          | 'accepting'
          | 'accepted'
          | 'rejected'
          | 'navigatingToHome'
          | {
              accepting?:
                | 'requestingReceivedVcs'
                | 'requestingExistingVc'
                | 'mergingIncomingVc'
                | 'prependingReceivedVc'
                | 'storingVc';
            };
      };
  'tags': never;
}
