import { PasswordForm } from '../components/PasswordForm';
import { ContentLayout } from '../../../components/Layout/ContentLayout';

export const Password = () => {
    return (
        <ContentLayout title="news" description="">
            <div className="h-full flex flex-col justify-between overflow-y-auto">
                <PasswordForm />
            </div>
        </ContentLayout>
    );
};
