import Player from 'video.js/dist/types/player';

type PlayerIdType =  string | Element;

type PlayerInstance = Player | undefined | null;

export type {PlayerIdType,PlayerInstance}