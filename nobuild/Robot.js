class Robot {
    constructor(name, version, alliance, allianceType, lockIn) {
        this.name = String(name)
        this.version = String(version)
        this.alliance = alliance // Set to 0 for blue, 1 for red
        this.allianceAI = Boolean(allianceAI) // Recognizes alliance color
        this.lockIn = Boolean(lockIn) // true or false, will disregard most rules for lockIn
    }
}