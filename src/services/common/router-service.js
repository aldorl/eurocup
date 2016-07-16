import { browserHistory } from 'react-router';

const PREFIX = '/';

function _removePrefix(path) {
    if (path.charAt(0) === PREFIX) {
        return path.slice(1, path.length);
    }
    return path;
}

export default {
    goToPath(path) {
        if (!path) return;

        return function() {
            browserHistory.push(path);
        }
    }
}
