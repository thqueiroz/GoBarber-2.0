import handlebars from 'handlebars';
import fs from 'fs';
import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IParserMailTemplateDTO from '../dtos/IParserMailTemplateDTO';

export default class HandlebarsMailTemplateProvider
    implements IMailTemplateProvider {
    public async parse({
        file,
        variables,
    }: IParserMailTemplateDTO): Promise<string> {
        const templateCotent = await fs.promises.readFile(file, {
            encoding: 'utf-8',
        });
        const parserTemplate = handlebars.compile(templateCotent);
        return parserTemplate(variables);
    }
}
