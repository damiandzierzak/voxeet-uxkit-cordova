export declare enum RTCPMode {
    WORST = "worst",
    AVERAGE = "average",
    BEST = "best"
}
export declare enum Mode {
    STANDARD = "standard",
    PUSH = "push"
}
export declare enum Codec {
    VP8 = "VP8",
    H264 = "H264"
}
export interface CreateParameters {
    ttl?: number;
    rtcpMode?: RTCPMode;
    mode?: Mode;
    videoCodec?: Codec;
    liveRecording?: boolean;
    dolbyVoice?: boolean;
    simulcast?: boolean;
}
export interface CreateOptions {
    alias?: string;
    params?: CreateParameters;
}
export interface CreateResult {
    conferenceId?: string;
    conferenceAlias?: string;
    isNew?: boolean;
}
