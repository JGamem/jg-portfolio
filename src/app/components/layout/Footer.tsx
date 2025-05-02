import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/i18n';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/">
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                Juan Martinez
                            </span>
                        </Link>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
                            {t('about.description')}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Navigation
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#home"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {t('nav.home')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#about"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {t('nav.about')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#experience"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {t('nav.experience')}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#skills"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {t('nav.skills')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            {t('contact.title')}
                        </h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                <span className="text-gray-600 dark:text-gray-400">+(502) 44911338</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />

                                href="mailto:johngamezm@gmail.com"
                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                                johngamezm@gmail.com
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <Github className="w-4 h-4 text-blue-600 dark:text-blue-400" />

                            href="https://github.com/juanmartinez"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                            GitHub
                        </a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />

                        href="https://linkedin.com/in/juanmartinez"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
        </div >

    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
        <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Juan Martinez. {t('footer.rights')}
        </p>
    </div>
      </div >
    </footer >
  );
};