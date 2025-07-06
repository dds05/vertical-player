import Player from 'video.js/dist/types/player';

type PlayerIdType = {
    playerID: string;
};

type PlayerInstance = Player | undefined | null;

export type {PlayerIdType,PlayerInstance}