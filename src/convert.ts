//Based on work made for python by: https://github.com/ThemisB/grecka/
class Grecka {
    static toGreeklish(text: string): string {
        const GR = Array.from("ΑΆΒΓΔΕΈΖΗΉΙΊΪΚΛΜΝΞΟΌΠΡΣΤΥΎΫΦΩΏαάβγδεέζηήιίϊΐκλμνξοόπρσςτυύϋΰφωώ");
        const EN = Array.from("AAVGDEEZIIIIIKLMNXOOPRSTYYYFOOaavgdeeziiiiiiklmnxooprsstyyyyfoo");

        const translation_dictionary = new Map<string, string>();

        for (let i = 0; i < GR.length; i++) {
            translation_dictionary.set(GR[i], EN[i]);
        }

        const syllables = [
            ['γχ', 'nch'], ['αυ(?=[θκξπστφχψ])', 'af'], ['ευ(?=[θκξπστφχψ|\s|$])', 'ef'], ['εύ(?=[θκξπστφχψ|\s|$])', 'ef'],
            ['ηυ(?=[θκξπστφχψ|\s|$])', 'if'], ['(?=^|\s|$)μπ', 'b'], ['μπ(?=^|\s|$)', 'b'],
            ['αι', 'ai'], ['οι', 'oi'], ['ου', 'ou'], ['ού', 'ou'], ['ει', 'ei'], ['ντ', 'nt'], ['τσ', 'ts'],
            ['τζ', 'tz'], ['γγ', 'ng'], ['γκ', 'gk'], ['θ', 'th'], ['χ', 'ch'], ['ψ', 'ps'],
            ['αυ', 'av'], ['ευ', 'ev'], ['ηυ', 'if'], ['μπ', 'mp'],
            ['Γχ', 'Nch'], ['Αυ(?=[θκξπστφχψ])', 'Af'], ['Ευ(?=[θκξπστφχψ|\s|$])', 'Ef'], ['Εύ(?=[θκξπστφχψ|\s|$])', 'Ef'],
            ['Ηυ(?=[θκξπστφχψ|\s|$])', 'If'], ['(?=^|\s|$)Μπ', 'B'], ['Μπ(?=^|\s|$)', 'B'],
            ['Αι', 'Ai'], ['Οι', 'Oi'], ['Ου', 'Ou'], ['Ού', 'Ou'], ['Ει', 'Ei'], ['Ντ', 'Nt'], ['Τς', 'Ts'],
            ['Τζ', 'Tz'], ['Γγ', 'Ng'], ['Γκ', 'Gk'], ['Θ(?=[α-ω])', 'Th'], ['Χ(?=[α-ω])', 'Ch'], ['Ψ(?=[α-ω])', 'Ps'],
            ['Αυ', 'Av'], ['Ευ', 'Ev'], ['Ηυ', 'If'], ['Μπ', 'Mp'],
            ['ΓΧ', 'NCH'], ['ΑΥ(?=[ΘΚΞΠΣΤΦΧΨ])', 'AF'], ['ΕΥ(?=[ΘΚΞΠΣΤΦΧΨ|\s|$])', 'EF'], ['ΕΎ(?=[ΘΚΞΠΣΤΦΧΨ|\s|$])', 'EF'],
            ['ΗΥ(?=[ΘΚΞΠΣΤΦΧΨ|\s|$])', 'IF'], ['(?=^|\s|$)ΜΠ', 'B'], ['ΜΠ(?=^|\s|$)', 'B'],
            ['ΑΙ', 'AI'], ['ΟΙ', 'OI'], ['ΟΥ', 'OU'], ['ΟΎ', 'OU'], ['ΕΙ', 'EI'], ['ΝΤ', 'NT'], ['ΤΣ', 'TS'],
            ['ΤΖ', 'TZ'], ['ΓΓ', 'NG'], ['ΓΚ', 'GK'], ['Θ(?=[Α-Ω|\s|$])', 'TH'], ['Χ(?=[Α-Ω|\s|$])', 'CH'], ['Ψ(?=[Α-Ω|\s|$])', 'PS'],
            ['ΑΥ', 'AV'], ['ΕΥ', 'EV'], ['ΗΥ', 'IF'], ['ΜΠ', 'B']
        ];

        for (let i = 0; i < syllables.length; i++) {
            text = text.replace(new RegExp(syllables[i][0], 'g'), syllables[i][1]);
        }

        for (let key of translation_dictionary.keys()) {
            text = text.replace(new RegExp(key, 'g'), ""+translation_dictionary.get(key));
        }

        return text;
    }
}

export class Convert {
    static toGreeklish(text: string): string {
        return Grecka.toGreeklish(text);
    }
}


export default Convert;


