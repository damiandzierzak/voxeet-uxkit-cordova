"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserInfo {
    constructor(externalId, name, avatarUrl) {
        this.name = name;
        this.externalId = externalId;
        this.avatarUrl = avatarUrl;
    }
    json() {
        return {
            name: this.name,
            externalId: this.externalId,
            avatarUrl: this.avatarUrl
        };
    }
}
exports.default = UserInfo;
//# sourceMappingURL=UserInfo.js.map