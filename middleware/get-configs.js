exports.getConfigs = (type, isRequired, Default) => {
    return {
        type,
        required: isRequired,
        default: Default
    }
}