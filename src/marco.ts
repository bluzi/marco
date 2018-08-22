class Marco {
    public actions = [];

    transform(text) {
        return this.actions.reduce((text, action) => action(text), text);
    }

    static between(seperator, transform) {
        this.actions.push(text =>
            text.replace(new RegExp(`${seperator}.*?${seperator}`, 'g'),
                text => transform(text.substring(seperator.length - 1, text.length - seperator.length + 1).trim()))
        );

        return this;
    }

    static startsWith(seperator, transform) {
        const self = this || new Marco();
        
        self.actions.push(text =>
            text.replace(new RegExp(`${seperator}.*`, 'g'),
                text => transform(text.substring(seperator.length).trim()))
        );

        return self;
    }
}

const t = `
    # hello!
    my name is *eliran*
`;

const result = Marco
    .between('\\*', text => `<strong>${text}</strong>`)
    .startsWith('#', text => `<h1>${text}</h1>`)
    .transform(t);

console.log(result);