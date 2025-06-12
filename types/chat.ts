export type Contact = {
    name: string;
    initials: string;
    colorClass: string;
    time: string;
    lastMessage: string;
};

export type Message = {
    text: string;
    from: 'user' | 'bot';
};
