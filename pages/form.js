import Head from 'next/head';
import { useState } from 'react';
import Form, {
    FormRow,
    FormInput,
    FormSelect,
    FormCheckBox,
    FormRadio,
    FormConfirm,
} from '../components/form';

export default function ActivityFormPage() {
    return (
        <>
            <Head>
                <title>Form</title>
            </Head>
            <AvtivityForm />
        </>
    );
}

function AvtivityForm() {
    const [zones] = useState(['zone 1', 'zone 2', 'zone 3']);
    const [resources] = useState(['resource 1', 'resource 2']);
    const [activityName, setActivityName] = useState('');
    const [activityZone, setActivityZone] = useState(
        zones?.length > 0 ? zones[0] : ''
    );
    const [activityResource, setActivityResource] = useState('');
    const [isInstantDelivery, setIsInstantDelivery] = useState(false);

    return (
        <Form>
            <FormRow text="Activity Name">
                <FormInput setValue={setActivityName} />
            </FormRow>
            <FormRow text="Activity Zone">
                <FormSelect options={zones} setValue={setActivityZone} />
            </FormRow>
            <FormRow text="Instant delivery">
                <FormCheckBox setValue={setIsInstantDelivery} />
            </FormRow>
            <FormRow text="Resources">
                <FormRadio options={resources} setValue={setActivityResource} />
            </FormRow>
            <FormRow>
                <FormConfirm />
            </FormRow>
        </Form>
    );
}
