import {message} from 'antd';

message.config({
    maxCount: 1,
});
export const loadingMessage = (title, time = 1.5) => message.loading(title, time);
export const successMessage = (title, time = 1.5) => message.success(title, time);
export const errorMessage = (title, time = 1.5) => message.error(title, time);
export const warningMessage = (title, time = 1.5) => message.warning(title, time);
