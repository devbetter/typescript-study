export {};

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori'|'Shiga';

type info = {
    kanji_name: string;
    confirmed_cases: number;
}

const jp: Record<Prefectures,info> = {
    Tokyo: { kanji_name: 'Tokyo', confirmed_cases: 1960 },
    Chiba: { kanji_name: 'Chiba', confirmed_cases: 249 },
    Tottori: { kanji_name: 'Tottori', confirmed_cases: 2 },
    Shiga:{kanji_name:'Tottori',confirmed_cases:2}
}
