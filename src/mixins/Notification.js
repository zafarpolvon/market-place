import Vue from 'vue';

export default {
    methods: {
        notification(methodName, msg) {
            this[methodName](msg)
        },
        successNotify(msg) {
            Vue.notify({
                group: 'foo',
                title: 'Успешно!!',
                text: msg,
                type: 'success',
                closeOnClick: true,
                sleep: 20000,
                duration: 25000
            });
        },
        errorNotify(msg) {
            Vue.notify({
                group: 'foo',
                title: 'Ошибка!!',
                text: msg,
                type: 'error',
                closeOnClick: true,
                sleep: 20000,
                duration: 25000
            });
        }
    }
}
