import { Content } from "./content"


describe('Notification content', () => {

    it('should be able to create a notification contet', () => {
        const content = new Content('Você recebeu uma soliciatação de amizade');
    
        expect(content).toBeTruthy();
    })
    
    
    it('should not be able to create a notification content with less than 5 caracters', () => {
        expect(() => new Content('voc')).toThrow();
    })
    
    it('should not be able to create a notification content with more than 240 caracters', () => {
        expect(() => new Content('v'.repeat(241))).toThrow();
    })

})

