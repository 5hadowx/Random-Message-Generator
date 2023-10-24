console.log('Random message of the day:');

const messages = {
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo',
    'Libra', 'Scorpio', 'Saggitarius', 'Capricorn', 'Aquarius', 'Pisces'],
    luck: ['good', 'bad', 'excellent', 'terrible'],
    traits: ['social', 'serious', 'independent', 'affectionate', 'optimistic', 
    'passionate', 'extroverted', 'deep', 'imaginative', 'stubborn', 'loyal', 'fiery']
}

const messageGenerator = () => {
    const messageSign = messages.signs[Math.floor(Math.random() * 12 - 1)];
    const messageLuck = messages.luck[Math.floor(Math.random() * messages.luck.length - 1)];
    const messageTrait = messages.traits[Math.floor(Math.random() * messages.traits.length - 1)];
    console.log(`Your sign is ${messageSign}.`);
    console.log(`Today you will have ${messageLuck} luck.`);
    console.log(`Your main trait is that you are ${messageTrait}.`);
}

messageGenerator();