---
sidebar_label: Contentful
title: Guide to Contentful
slug: /guides/contentful
---

The Statsig Contentful integration lets you create A/B/n tests and test different content blocks against each other directly from within Contentful. You can assess impact using business metrics on Statsig Cloud or Warehouse Native. Marketers can optimize content, obtain insights, and iterate continuously right from within Contentful.

- Run experiments on CMS content without engineering involvement
- Configure content to serve with each variation
- No performance penalty or flicker

The Statsig Contentful app will add a Statsig container that is connected to an experiment in Statsig. The user can then add Content Blocks to that container to start a test. The Statsig Contentful app lets marketers measure progress towards business objectives by testing content for lift in any core business metrics configured in Statsig.

## Integrating with Contentful

Our Contentful Marketplace App is publicly available. You can find it [here](https://www.contentful.com/marketplace/statsig). To use this integration effectively, you will need to do setup around the Contentful marketplace app, your Content types, and your actual codebase. These are one-time setups, then you will be able to seamlessly run A/B/n tests directly inside Contentful.

### Setting up the Statsig Marketplace App

- Navigate to the Marketplace in Contentful, and find the Statsig app. Click 'Install'.

- Statsig will prompt you to enter a Console API Key. You can find an existing Console API Key in your Statsig project under Settings > Keys & Environments. It's important that this key is **of type 'Console', and has read and write permissions**. Feel free to generate a new key of type 'Console' if a suitable one does not already exist for your project.

  ![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/80a564ad-22db-45aa-8caa-246512aad0ee.png)

- Once your API Key is entered, hit 'Install to selected environments'. Your app should now be configured. Note that returning to this page later will only show the _obfuscated_ API Key.

### Setting up Experiments in Content Types

You can configure your existing content types to run Statsig experiments in, automatically serving different variants of this content type to your users. The steps below walk through how to add a 'Statsig experiment' field to your target content type.

- Navigate to the 'Content model' tab in Contentful, and select your target content type (in this example, `page - Blog post`). You should see the list of fields for this content type:

  ![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/39c0ba10-1ba3-49a3-a106-bad366ba8e6a.png)

- Click 'Add field', and choose 'Reference'. Enter `Statsig experiment` for the Name, then click 'Add and Configure'.

  ![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/c077a3e3-797c-4600-9565-d8202f86db93.png)

- Under 'Validation', select 'Accept only specified entry type', and choose 'Statsig variant container' from the dropdown.

  ![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/b537b900-92ee-4e8a-ab47-75f4f4b9af46.png)

- Confirm your new field, and save your content type.

Your content type is now setup to use Statsig Experiments! Feel free to repeat this process for any other content types you would like to be able to run experiments with.

### Running an Experiment on your Content

To run an experiment on your content, you can link a Statsig Experiment to it. Here's how:

- Navigate to the 'Content' tab in Contentful, and select your existing entry from the list. At the bottom of the Editor tab, you should now see an editable field for 'Statsig experiment':

  ![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/63042ccf-382b-4e04-b23d-8c6bd8eb9cf1.png)

- Click on 'Add content', and select 'Statsig variant container' from the New content dropdown. You should see a new Statsig variant container layover:

  ![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/77688f35-b775-4c84-885d-67ee111d67e4.png)

- Under the Statsig tab, enter the name of your experiment under the 'Entry Name' field. Add your control and treatment variations.

- When your experiment setup is finalized, hit 'Publish' on the new Statsig variant container entry. NOTE: ensure your experiment setup is finalized before publishing, as this will create your experiment inside of Statsig.

  ![image.png](https://graphite-user-uploaded-assets-prod.s3.amazonaws.com/qQgXOng6fMO38nDCoRsE/872643fb-9782-4728-96ca-362375323cfa.png)

- You should now be prompted to start your newly created experiment inside of Statsig. Follow the 'Go to Statsig Experiment' link to finalize your experiment's setup, add metrics, and start your experiment.

- Once your experiment has been started on Statsig, you should see a green banner at the top of your Statsig variant container, and your variation fields will no longer be editable.

- Return to your original entry, and hit 'Publish changes'.

Your experiment is now live!

### Integrating Statsig Experiments in your Codebase

**These docs are coming soon**

We will provide an example Github Repository of a web app that integrates experiments using your new Statsig variant container and enabled Content types.
