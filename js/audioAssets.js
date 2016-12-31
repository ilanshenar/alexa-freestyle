'use strict';

// Audio Source - AWS Podcast : https://aws.amazon.com/podcasts/aws-podcast/
var audioData = [
    {
        'title' : 'Beat 1',
        'url' : 'https://s3.amazonaws.com/audio-assets/2-Chainz-Ft.-Kanye-West-Birthday-Song-Instrumental.mp3'
    },
    {
        'title' : 'Beat 2',
        'url' : 'https://s3.amazonaws.com/audio-assets/2Pac-Hail-Mary-Instrumental-Prod.-By-Hurt-M-Badd.mp3'
    },
    {
        'title' : 'Beat 3',
        'url' : 'https://s3.amazonaws.com/audio-assets/50-Cent-What-Up-Gangsta-Instrumental-Prod.-By-Rob-Reef-Tewlow.mp3'
    },
    {
        'title' : 'Beat 4',
        'url' : 'https://s3.amazonaws.com/audio-assets/ASAP-Ferg-Ft.-ASAP-Rocky-French-Montana-Trinidad-James-Schoolboy-Q-Work-Remix-Instrumental.mp3'
    },
    {
        'title' : 'Beat 5',
        'url' : 'https://s3.amazonaws.com/audio-assets/Casino-Mel-Ft.-Gucci-Mane-Trap-Nigga-Instrumental-Prod.-By-Chophouze.mp3'
    },
    {
        'title' : 'Beat 6',
        'url' : 'https://s3.amazonaws.com/audio-assets/Chance-The-Rapper-Ft.-Lil-Wayne-2-Chainz-No-problem-Instrumental.mp3'
    },
    {
        'title' : 'Beat 7',
        'url' : 'https://s3.amazonaws.com/audio-assets/DJ-Khaled-Ft.-Drake-For-Free-Instrumental.mp3'
    },
    {
        'title' : 'Beat 8',
        'url' : 'https://s3.amazonaws.com/audio-assets/Drake-Ft.-21-Savage-Sneakin-Instrumental.mp3'
    },
    {
        'title' : 'Beat 9',
        'url' : 'https://s3.amazonaws.com/audio-assets/Drake-Ft.-The-Throne-Pop-Style-Instrumental-Abid.mp3'
    },
    {
        'title' : 'Beat 10',
        'url' : 'https://s3.amazonaws.com/audio-assets/Eminem-The-Way-I-Am-Instrumental-Prod.-By-Eminem.mp3'
    },
    {
        'title' : 'Beat 11',
        'url' : 'https://s3.amazonaws.com/audio-assets/Future-Drake-Used-to-This-Instrumental.mp3'
    },
    {
        'title' : 'Beat 12',
        'url' : 'https://s3.amazonaws.com/audio-assets/Jay-Z-Ft.-Justin-Timberlake-Magna-Carta-Holy-Grail-Instrumental.mp3'
    },
    {
        'title' : 'Beat 13',
        'url' : 'https://s3.amazonaws.com/audio-assets/Jay-Z-Public-Service-Announcement-Instrumental-Prod.-By-Just-Blaze.mp3'
    },
    {
        'title' : 'Beat 14',
        'url' : 'https://s3.amazonaws.com/audio-assets/Jeezy-Ft.-Jay-Z-Seen-It-All-Instrumental.mp3'
    },
    {
        'title' : 'Beat 15',
        'url' : 'https://s3.amazonaws.com/audio-assets/Kanye-West-Ft.-Jay-Z-J.-Ivy-Never-Let-Me-Down-Instrumental-Prod.-By-Kanye-West.mp3'
    },
    {
        'title' : 'Beat 16',
        'url' : 'https://s3.amazonaws.com/audio-assets/Kanye-West-Jay-Z-Niggas-In-Paris-Instrumental.mp3'
    },
    {
        'title' : 'Beat 17',
        'url' : 'https://s3.amazonaws.com/audio-assets/Kendrick-Lamar-Ft.-Jay-Rock-Money-Trees-Instrumental-Prod.-By-DJ-Dahi.mp3'
    },
    {
        'title' : 'Beat 18',
        'url' : 'https://s3.amazonaws.com/audio-assets/Kendrick-Lamar-Ft.-Jay-Z-Bitch-Dont-Kill-My-Vibe-Remix-Instrumental.mp3'
    },
    {
        'title' : 'Beat 19',
        'url' : 'https://s3.amazonaws.com/audio-assets/Lil-B-Everytime-I-Fail-Instrumental-Prod.-By-Valkyrie.mp3'
    },
    {
        'title' : 'Beat 20',
        'url' : 'https://s3.amazonaws.com/audio-assets/Notorious-B.I.G.-Juicy-Instrumental.mp3'
    },
    {
        'title' : 'Beat 21',
        'url' : 'https://s3.amazonaws.com/audio-assets/Post-Malone-Go-Flex-Instrumental-Prod.-By-Charlie-Handsome-Rex-Kudo.mp3'
    },
    {
        'title' : 'Beat 22',
        'url' : 'https://s3.amazonaws.com/audio-assets/Schoolboy-Q-Ft.-Kendrick-Lamar-Collard-Greens-Instrumental.mp3'
    },
    {
        'title' : 'Beat 23',
        'url' : 'https://s3.amazonaws.com/audio-assets/Snoop-Dogg-Sexual-Eruption-Instrumental-Prod.-By-Shawty-Redd.mp3'
    },
    {
        'title' : 'Beat 24',
        'url' : 'https://s3.amazonaws.com/audio-assets/Soulja-Boy-Whole-Lot-of-Money-Instrumental-Prod.-By-Dirty-Vans.mp3'
    },
    {
        'title' : 'Beat 25',
        'url' : 'https://s3.amazonaws.com/audio-assets/Wiz-Khalifa-Ft.-Charlie-Puth-See-You-Again-Instrumental-Prod.-By-Charlie-Puth.mp3'
    },
    {
        'title' : 'Beat 26',
        'url' : 'https://s3.amazonaws.com/audio-assets/Wiz-Khalifa-Ft.-Snoop-Dogg-Bruno-Mars-Young-Wild-Free-Instrumental.mp3'
    },
    {
        'title' : 'Beat 27',
        'url' : 'https://s3.amazonaws.com/audio-assets/Wiz-Khalifa-Ft.-Ty-Dolla-Sign-Banger-Instrumental.mp3'
    },
    {
        'title' : 'Beat 28',
        'url' : 'https://s3.amazonaws.com/audio-assets/Yonkers.mp3'
    },
    {
        'title' : 'Beat 29',
        'url' : 'https://s3.amazonaws.com/audio-assets/Young-Chop-Ft.-Chief-Keef-RiFF-RaFF-Ring-Ring-Ring-Instrumental-Prod-By-CBMIX.mp3'
    },
    {
        'title' : 'Beat 30',
        'url' : 'https://s3.amazonaws.com/audio-assets/Young-Chop-What-You-Need-Instrumental-Prod.-By-CBMIX.mp3'
    },
    {
        'title' : 'Beat 31',
        'url' : 'https://s3.amazonaws.com/audio-assets/dopebeat.mp3'
    },
    {
        'title' : 'Beat 32',
        'url' : 'https://s3.amazonaws.com/audio-assets/dopebeat2.mp3'
    },
    {
        'title' : 'Beat 33',
        'url' : 'https://s3.amazonaws.com/audio-assets/dopebeat3.mp3'
    }
];

module.exports = audioData;