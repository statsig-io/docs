---
title: Feature Flag Overrides
sidebar_label: Overrides
slug: /feature-flags/overrides
keywords:
  - owner:shubham
---

:::note

Usually referred to online as _feature flags_, the Statsig UI and SDKs call them _feature gates_.

:::

## Override results of a feature gate

During development, it can be useful to explicitly state which users should pass or fail a given feature gate. This is where overrides come in.

Overrides are based of user IDs and can be set to pass or fail for a given user ID. During evaluation of a gate, if the user ID is overridden, the overridden result will be returned immediately before any rules are evaluated.

### Adding an Override

- Log into the Statsig console at https://console.statsig.com
- On the left-hand navigation panel, select **Feature Gates**
- Select the feature gate where you want to add an Override
- Click the **Add Override** button

![image-add-overrides](https://user-images.githubusercontent.com/95646168/148461864-4a5efd47-2e40-478f-81e5-49edfc5ea2e9.png)

- Select either 'Pass List' or 'Fail List' from the tabs in the dialog

![image-manage-overrides-dialog](https://user-images.githubusercontent.com/95646168/148462020-417c007f-d492-46f7-8d25-d7a5178b4fe2.png)

- For users you want to pass the gate, add them to the 'Pass List'
- For users you want to fail the gate, add them to the 'Fail List'

  :::info Note
  A user can only exist on one of these lists at a time.
  :::

- Once you have added the user IDs, hit **Save**

### Deleting an Override

If you add an override but later decide it is no longer needed. You can remove it so the rules will be evaluated as normal.

- Log into the Statsig console at https://console.statsig.com
- On the left-hand navigation panel, select **Feature Gates**
- Select the feature gate where you want to add an Override
- Click the **Edit Overrides** button

![Screen Shot 2022-01-06 at 3 27 43 PM](https://user-images.githubusercontent.com/95646168/148469394-9f86db83-26f6-4a5b-809f-8a53f0b4f1fa.png)

- Hit the trashcan icon next to the user ID you wish to remove from a list.

  ![image-remove-override](https://user-images.githubusercontent.com/95646168/148463292-6740a09f-337f-441a-9cfa-a547a5dc6183.png)

- Once you have updated the lists, hit **Save**

### Testing an Override

Once your override has been added, you can test it in the "Test Gate" window by simply adding userID as a property of the user object.

![image-testing-gates](https://user-images.githubusercontent.com/95646168/148462648-e7da94bb-a681-4b0a-ad53-1254c6abe623.png)

Users that pass will see "PASS (User ID Override)"

![image-pass-gate](https://user-images.githubusercontent.com/95646168/148462641-57b544c1-bbdb-48cf-bb7f-967b0b20fc63.png)

Users that fail will see "FAIL (User ID Override)"

![image-failed-gate](https://user-images.githubusercontent.com/95646168/148462634-de69b838-f7b1-431c-9119-64ce123ad218.png)
