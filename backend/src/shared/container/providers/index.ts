import { container } from 'tsyringe';
import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DiskProviderProvider from './StorageProvider/implementations/DiskStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealMailProvider from './MailProvider/implementations/EtherealMailProvider';

import IMailTemplateProvider from './MailTemplateProvider/models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './MailTemplateProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
    'StorageProvider',
    DiskProviderProvider,
);

container.registerInstance<IMailTemplateProvider>(
    'MailTemplateProvider',
    new HandlebarsMailTemplateProvider(),
);

container.registerInstance<IMailProvider>(
    'EtherealMailProvider',
    container.resolve(EtherealMailProvider),
);
