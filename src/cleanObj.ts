import type { User } from './types';

const user: User = window.cleanObj.user;

const code = window.cleanObj.getCode();

const { id: userId } = user;

export { code, userId };
