import {Store} from 'flux-es6';

export default class extends Store {
    getState() {
        return "";
    }

    handleDispatcherAction(payload) {
        this.emitChange();

        return true;
    }
}