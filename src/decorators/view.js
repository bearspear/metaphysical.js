﻿export function View(str, embed = true) {
    return function (target) {
        if (typeof str === 'string') {
            target.prototype.template = str;
            target.prototype.embedTemplate = embed;
        } else {
            throw new Error(`Not a template`);
        }
    }
}


export function View2(options) {
    return function (target) {
        if (options.template) {
            if (typeof options.template === 'string') {
                target.prototype.template = options.template;
                target.prototype.embedTemplate = true;
            } else {
                target.prototype.template = options.template[0] || null;
                target.prototype.embedTemplate = options.template[1];
            }
        }
        if (options.registry) {
            target.prototype.registry = new Map(options.registry);
        }
    }
}
