// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const inspirations = [
  {
    q: 'Doubt is an uncomfortable condition, but certainty is a ridiculous one.',
    a: 'Voltaire',
    c: '71',
    h: '\u003Cblockquote\u003E&ldquo;Doubt is an uncomfortable condition, but certainty is a ridiculous one.&rdquo; &mdash; \u003Cfooter\u003EVoltaire\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "Don't ever save anything for a special occasion. Being alive is the special occasion.",
    a: 'Mary Engelbreit',
    c: '85',
    h: "\u003Cblockquote\u003E&ldquo;Don't ever save anything for a special occasion. Being alive is the special occasion.&rdquo; &mdash; \u003Cfooter\u003EMary Engelbreit\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'Absurdity is the ecstasy of intellectualism.',
    a: 'Criss Jami',
    c: '44',
    h: '\u003Cblockquote\u003E&ldquo;Absurdity is the ecstasy of intellectualism.&rdquo; &mdash; \u003Cfooter\u003ECriss Jami\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'The ladder of success is best climbed by stepping on the rungs of opportunity.',
    a: 'Ayn Rand',
    c: '78',
    h: '\u003Cblockquote\u003E&ldquo;The ladder of success is best climbed by stepping on the rungs of opportunity.&rdquo; &mdash; \u003Cfooter\u003EAyn Rand\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "Don't let the noise of others' opinions drown out your own inner voice.",
    a: 'Steve Jobs',
    c: '71',
    h: "\u003Cblockquote\u003E&ldquo;Don't let the noise of others' opinions drown out your own inner voice.&rdquo; &mdash; \u003Cfooter\u003ESteve Jobs\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'Follow your heart, listen to your inner voice, stop caring about what others think.',
    a: 'Roy T. Bennett',
    c: '83',
    h: '\u003Cblockquote\u003E&ldquo;Follow your heart, listen to your inner voice, stop caring about what others think.&rdquo; &mdash; \u003Cfooter\u003ERoy T. Bennett\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "At every moment where language can't go, that's your mind.",
    a: 'Bodhidharma',
    c: '58',
    h: "\u003Cblockquote\u003E&ldquo;At every moment where language can't go, that's your mind.&rdquo; &mdash; \u003Cfooter\u003EBodhidharma\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'We shape clay into a pot, but it is the emptiness inside that holds whatever we want.',
    a: 'Lao Tzu',
    c: '85',
    h: '\u003Cblockquote\u003E&ldquo;We shape clay into a pot, but it is the emptiness inside that holds whatever we want.&rdquo; &mdash; \u003Cfooter\u003ELao Tzu\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Take care of your cents: dollars will take care of themselves.',
    a: 'Thomas Jefferson',
    c: '62',
    h: '\u003Cblockquote\u003E&ldquo;Take care of your cents: dollars will take care of themselves.&rdquo; &mdash; \u003Cfooter\u003EThomas Jefferson\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'When you want to be honored by others, you learn to honor them first.',
    a: 'Sathya Sai Baba',
    c: '69',
    h: '\u003Cblockquote\u003E&ldquo;When you want to be honored by others, you learn to honor them first.&rdquo; &mdash; \u003Cfooter\u003ESathya Sai Baba\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'We meet ourselves time and again in a thousand disguises on the path of life.',
    a: 'Carl Jung',
    c: '77',
    h: '\u003Cblockquote\u003E&ldquo;We meet ourselves time and again in a thousand disguises on the path of life.&rdquo; &mdash; \u003Cfooter\u003ECarl Jung\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Success is a consequence and must not be a goal.',
    a: 'Gustave Flaubert',
    c: '48',
    h: '\u003Cblockquote\u003E&ldquo;Success is a consequence and must not be a goal.&rdquo; &mdash; \u003Cfooter\u003EGustave Flaubert\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Your heart is the size of an ocean. Go find yourself in its hidden depths.',
    a: 'Rumi',
    c: '74',
    h: '\u003Cblockquote\u003E&ldquo;Your heart is the size of an ocean. Go find yourself in its hidden depths.&rdquo; &mdash; \u003Cfooter\u003ERumi\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Only I can change my life. No one can do it for me.',
    a: 'Carol Burnett',
    c: '51',
    h: '\u003Cblockquote\u003E&ldquo;Only I can change my life. No one can do it for me.&rdquo; &mdash; \u003Cfooter\u003ECarol Burnett\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'You already have every characteristic necessary for success if you recognize, claim, develop and use them.',
    a: 'Zig Ziglar',
    c: '106',
    h: '\u003Cblockquote\u003E&ldquo;You already have every characteristic necessary for success if you recognize, claim, develop and use them.&rdquo; &mdash; \u003Cfooter\u003EZig Ziglar\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'A creative man is motivated by the desire to achieve, not by the desire to beat others.',
    a: 'Ayn Rand',
    c: '87',
    h: '\u003Cblockquote\u003E&ldquo;A creative man is motivated by the desire to achieve, not by the desire to beat others.&rdquo; &mdash; \u003Cfooter\u003EAyn Rand\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'The way out is in.',
    a: 'Thich Nhat Hanh',
    c: '18',
    h: '\u003Cblockquote\u003E&ldquo;The way out is in.&rdquo; &mdash; \u003Cfooter\u003EThich Nhat Hanh\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Fear does not have any special power unless you empower it by submitting to it.',
    a: 'Les Brown',
    c: '79',
    h: '\u003Cblockquote\u003E&ldquo;Fear does not have any special power unless you empower it by submitting to it.&rdquo; &mdash; \u003Cfooter\u003ELes Brown\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Man suffers only because he takes seriously what the gods made for fun.',
    a: 'Alan Watts',
    c: '71',
    h: '\u003Cblockquote\u003E&ldquo;Man suffers only because he takes seriously what the gods made for fun.&rdquo; &mdash; \u003Cfooter\u003EAlan Watts\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Nothing can survive without food. Everything we consume acts either to heal us or to poison us.',
    a: 'Thich Nhat Hanh',
    c: '95',
    h: '\u003Cblockquote\u003E&ldquo;Nothing can survive without food. Everything we consume acts either to heal us or to poison us.&rdquo; &mdash; \u003Cfooter\u003EThich Nhat Hanh\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Everyone sees what you appear to be, few experience what you really are.',
    a: 'Niccolo Machiavelli',
    c: '72',
    h: '\u003Cblockquote\u003E&ldquo;Everyone sees what you appear to be, few experience what you really are.&rdquo; &mdash; \u003Cfooter\u003ENiccolo Machiavelli\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "This is such a short and precious life that it's really important that you don't spend it being unhappy.",
    a: 'Naval Ravikant',
    c: '104',
    h: "\u003Cblockquote\u003E&ldquo;This is such a short and precious life that it's really important that you don't spend it being unhappy.&rdquo; &mdash; \u003Cfooter\u003ENaval Ravikant\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'Enjoy every minute of life. Never second-guess life.',
    a: 'Michael Jordan',
    c: '52',
    h: '\u003Cblockquote\u003E&ldquo;Enjoy every minute of life. Never second-guess life.&rdquo; &mdash; \u003Cfooter\u003EMichael Jordan\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'I find the best way to love someone is not to change them, but instead, help them reveal the greatest version of themselves.',
    a: 'Steve Maraboli',
    c: '124',
    h: '\u003Cblockquote\u003E&ldquo;I find the best way to love someone is not to change them, but instead, help them reveal the greatest version of themselves.&rdquo; &mdash; \u003Cfooter\u003ESteve Maraboli\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "It's very strange that the people you love are often the people you're most cruel to.",
    a: 'Kenneth Branagh',
    c: '85',
    h: "\u003Cblockquote\u003E&ldquo;It's very strange that the people you love are often the people you're most cruel to.&rdquo; &mdash; \u003Cfooter\u003EKenneth Branagh\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'How you think when you lose determines how long it will be until you win.',
    a: 'Gilbert Chesterton',
    c: '73',
    h: '\u003Cblockquote\u003E&ldquo;How you think when you lose determines how long it will be until you win.&rdquo; &mdash; \u003Cfooter\u003EGilbert Chesterton\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "Have a vision, trust yourself, break some rules, ignore the naysayers, don't be afraid to fail.",
    a: 'Arnold Schwarzenegger',
    c: '95',
    h: "\u003Cblockquote\u003E&ldquo;Have a vision, trust yourself, break some rules, ignore the naysayers, don't be afraid to fail.&rdquo; &mdash; \u003Cfooter\u003EArnold Schwarzenegger\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    a: 'Thomas Edison',
    c: '104',
    h: "\u003Cblockquote\u003E&ldquo;Many of life's failures are people who did not realize how close they were to success when they gave up.&rdquo; &mdash; \u003Cfooter\u003EThomas Edison\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: "Go confidently in the direction of your dreams. Live the life you've imagined.",
    a: 'Arnold Schwarzenegger',
    c: '78',
    h: "\u003Cblockquote\u003E&ldquo;Go confidently in the direction of your dreams. Live the life you've imagined.&rdquo; &mdash; \u003Cfooter\u003EArnold Schwarzenegger\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'It is not enough to win a war; it is more important to organize the peace.',
    a: 'Aristotle',
    c: '74',
    h: '\u003Cblockquote\u003E&ldquo;It is not enough to win a war; it is more important to organize the peace.&rdquo; &mdash; \u003Cfooter\u003EAristotle\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Success is the sum of small efforts, repeated day in and day out.',
    a: 'Robert Collier',
    c: '65',
    h: '\u003Cblockquote\u003E&ldquo;Success is the sum of small efforts, repeated day in and day out.&rdquo; &mdash; \u003Cfooter\u003ERobert Collier\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Against the assault of laughter nothing can stand.',
    a: 'Mark Twain',
    c: '50',
    h: '\u003Cblockquote\u003E&ldquo;Against the assault of laughter nothing can stand.&rdquo; &mdash; \u003Cfooter\u003EMark Twain\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Many people spend more time looking at their failures than focusing on their successes.',
    a: 'Lolly Daskal',
    c: '87',
    h: '\u003Cblockquote\u003E&ldquo;Many people spend more time looking at their failures than focusing on their successes.&rdquo; &mdash; \u003Cfooter\u003ELolly Daskal\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Success is going from failure to failure without losing your enthusiasm',
    a: 'Winston Churchill',
    c: '71',
    h: '\u003Cblockquote\u003E&ldquo;Success is going from failure to failure without losing your enthusiasm&rdquo; &mdash; \u003Cfooter\u003EWinston Churchill\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Reflect upon your present blessings of which every man has many - not on your past misfortunes, of which all men have some.',
    a: 'Charles Dickens',
    c: '123',
    h: '\u003Cblockquote\u003E&ldquo;Reflect upon your present blessings of which every man has many - not on your past misfortunes, of which all men have some.&rdquo; &mdash; \u003Cfooter\u003ECharles Dickens\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'There will always be suffering. But we must not suffer over the suffering.',
    a: 'Alan Watts',
    c: '74',
    h: '\u003Cblockquote\u003E&ldquo;There will always be suffering. But we must not suffer over the suffering.&rdquo; &mdash; \u003Cfooter\u003EAlan Watts\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "It's not what we do once in a while that shapes our lives, but what we do consistently.",
    a: 'Tony Robbins',
    c: '87',
    h: "\u003Cblockquote\u003E&ldquo;It's not what we do once in a while that shapes our lives, but what we do consistently.&rdquo; &mdash; \u003Cfooter\u003ETony Robbins\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'Never allow someone to be your priority while allowing yourself to be their option.',
    a: 'Mark Twain',
    c: '83',
    h: '\u003Cblockquote\u003E&ldquo;Never allow someone to be your priority while allowing yourself to be their option.&rdquo; &mdash; \u003Cfooter\u003EMark Twain\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'The wisest men follow their own direction.',
    a: 'Euripides',
    c: '42',
    h: '\u003Cblockquote\u003E&ldquo;The wisest men follow their own direction.&rdquo; &mdash; \u003Cfooter\u003EEuripides\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "It's very important to like the people you work with, otherwise life and your job is gonna be quite miserable.",
    a: 'Elon Musk',
    c: '110',
    h: "\u003Cblockquote\u003E&ldquo;It's very important to like the people you work with, otherwise life and your job is gonna be quite miserable.&rdquo; &mdash; \u003Cfooter\u003EElon Musk\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'A diamond is a piece of charcoal that handled stress exceptionally well.',
    a: 'Unknown',
    c: '72',
    h: '\u003Cblockquote\u003E&ldquo;A diamond is a piece of charcoal that handled stress exceptionally well.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "Everything you've ever wanted is on the other side of fear.",
    a: 'Brian Tracy',
    c: '59',
    h: "\u003Cblockquote\u003E&ldquo;Everything you've ever wanted is on the other side of fear.&rdquo; &mdash; \u003Cfooter\u003EBrian Tracy\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing.',
    a: 'Alan Watts',
    c: '130',
    h: '\u003Cblockquote\u003E&ldquo;You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing.&rdquo; &mdash; \u003Cfooter\u003EAlan Watts\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'You have to accept whatever comes, and the only important thing is that you meet it with the best you have to give.',
    a: 'Eleanor Roosevelt',
    c: '115',
    h: '\u003Cblockquote\u003E&ldquo;You have to accept whatever comes, and the only important thing is that you meet it with the best you have to give.&rdquo; &mdash; \u003Cfooter\u003EEleanor Roosevelt\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Everyday you can take a tiny step in the right direction.',
    a: 'Unknown',
    c: '57',
    h: '\u003Cblockquote\u003E&ldquo;Everyday you can take a tiny step in the right direction.&rdquo; &mdash; \u003Cfooter\u003EUnknown\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "Nothing you do is going to matter that much in the long run. Don't take yourself so seriously.",
    a: 'Naval Ravikant',
    c: '94',
    h: "\u003Cblockquote\u003E&ldquo;Nothing you do is going to matter that much in the long run. Don't take yourself so seriously.&rdquo; &mdash; \u003Cfooter\u003ENaval Ravikant\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'Life is a constant series of opportunities.',
    a: 'Ming-Dao Deng',
    c: '43',
    h: '\u003Cblockquote\u003E&ldquo;Life is a constant series of opportunities.&rdquo; &mdash; \u003Cfooter\u003EMing-Dao Deng\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'The best way to not feel hopeless is to get up and do something.',
    a: 'Barack Obama',
    c: '64',
    h: '\u003Cblockquote\u003E&ldquo;The best way to not feel hopeless is to get up and do something.&rdquo; &mdash; \u003Cfooter\u003EBarack Obama\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: 'Laws are like cobwebs, which may catch small flies, but let wasps and hornets break through.',
    a: 'Jonathan Swift',
    c: '92',
    h: '\u003Cblockquote\u003E&ldquo;Laws are like cobwebs, which may catch small flies, but let wasps and hornets break through.&rdquo; &mdash; \u003Cfooter\u003EJonathan Swift\u003C/footer\u003E\u003C/blockquote\u003E',
  },
  {
    q: "Family not only needs to consist of merely those whom we share blood, but also of those whom we'd give blood.",
    a: 'Charles Dickens',
    c: '109',
    h: "\u003Cblockquote\u003E&ldquo;Family not only needs to consist of merely those whom we share blood, but also of those whom we'd give blood.&rdquo; &mdash; \u003Cfooter\u003ECharles Dickens\u003C/footer\u003E\u003C/blockquote\u003E",
  },
  {
    q: 'To iterate is human, to recurse divine',
    a: '— Laurence Peter Deutsch',
    c: '109',
    h: "\u003Cblockquote\u003E&ldquo;Family not only needs to consist of merely those whom we share blood, but also of those whom we'd give blood.&rdquo; &mdash; \u003Cfooter\u003ECharles Dickens\u003C/footer\u003E\u003C/blockquote\u003E",
  },
]

export default function handler(req, res) {
  res.status(200).json(inspirations)
}
