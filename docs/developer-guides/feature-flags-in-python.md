---
title: How to set up Feature Flags in Python
sidebar_label: Feature Flags in Python
slug: /developer-guides/feature-flags-in-python
displayed_sidebar: cloud
keywords:
  - owner:brock
last_update:
  date: 2024-09-25
---

Using feature flags in a Python application with Statsig involves a few steps, starting from setting up a simple Python app to integrating Statsig and using its SDK to manage feature flags. Here's how to go about it:

### Step 1: Creating a Simple Python "Hello World" Application

1. **Set Up Your Python Environment**:
   - Ensure Python is installed on your system. You can download it from [python.org](https://www.python.org/downloads/).
   - Optionally, create a virtual environment for your project to manage dependencies:
     ```
     python -m venv venv
     source venv/bin/activate  # On Windows use `venv\Scripts\activate`
     ```

2. **Create a New Python File**:
   - In your project directory, create a file named `app.py`.

3. **Write a Simple Python Program**:
   - Open `app.py` in your favorite text editor or IDE and write a simple Python program:
     ```python
     print("Hello, World!")
     ```

4. **Run Your Program**:
   - Run your program from the command line or terminal:
     ```
     python app.py
     ```
   - You should see "Hello, World!" printed to the console.

### Step 2: Integrating Statsig to Use Feature Flags

To integrate Statsig into your Python application, follow these steps:

1. **Install the Statsig Server SDK for Python**:
   - Install the SDK using pip:
     ```
     pip install statsig
     ```

2. **Initialize Statsig in Your Application**:
   - Modify `app.py` to include initialization of the Statsig SDK and to check a feature flag. You will need a server secret key from Statsig, which you can get from the Statsig dashboard.
     ```python
     from statsig import statsig
     from statsig.statsig_user import StatsigUser

     # Initialize Statsig with your server secret key
     statsig.initialize('your_server_secret_key')

     # Check a feature flag
     if statsig.check_gate(StatsigUser("user-id"), 'your_feature_flag_name'):
         print("Feature Enabled: Hello, Statsig World!")
     else:
         print("Feature Disabled: Hello, World!")

     # Shutdown Statsig before your application exits
     statsig.shutdown()
     ```
   - Replace `'your_server_secret_key'` with your actual server secret key from Statsig.
   - Replace `'your_feature_flag_name'` with the name of your feature flag.

3. **Run Your Program Again**:
   - Run your updated program. The message printed to the console will depend on the status of your feature flag in Statsig.

### Step 3: Creating Feature Flags in the Statsig Console

To create and manage your feature flags:

1. **Sign Up/Login to Statsig**:
   - Go to the Statsig website and create an account or log in.

2. **Create a New Project** (if you haven't already):
   - In the Statsig dashboard, create a new project for your application.

3. **Navigate to the Feature Flags Section**:
   - Inside your project, go to the "Feature Flags" section from the sidebar.

4. **Create a New Feature Flag**:
   - Click on "Create Feature Flag".
   - Enter a name for your feature flag (e.g., `your_feature_flag_name`).
   - Optionally, configure targeting rules based on user properties or environments.
   - Save the feature flag.

   ![image](https://github.com/statsig-io/.github/assets/74588208/08e67ba8-b148-4b53-8a7e-ab17e3db4346)

5. **Toggle Your Feature Flag**:
   - You can enable/disable the feature flag or configure more sophisticated targeting rules as needed.

By following these steps, you have created a simple Python application that uses Statsig for feature flag management. This setup allows you to control features and experiments in your application dynamically, without needing to deploy new code for every change.