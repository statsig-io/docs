---
title: How to run an AB Test in Python
sidebar_label: First AB Test in Python
slug: /developer-guides/abtest-in-python
displayed_sidebar: cloud
keywords:
  - owner:brock
last_update: 2024-09-25
---

Running a simple A/B experiment in a web page with Python and the Statsig SDK involves a few distinct steps, including creating a basic web server, integrating with Statsig for A/B testing, and configuring the experiment via the Statsig console. Below is a step-by-step guide.

### Step 1: Create a Basic Python Web Server

First, you'll need a simple Python web server. Flask is a lightweight WSGI web application framework that's perfect for this purpose.

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

### Step 2: Integrate Statsig for A/B Testing

1. **Install Statsig SDK**:
    - Add the Statsig SDK to your project:
      ```bash
      pip install statsig
      ```

2. **Initialize Statsig in Your Application**:
   - Modify `app.py` to include initialization of the Statsig SDK and to check a feature flag. You will need a server secret key from Statsig, which you can get from the Statsig dashboard.
     ```python
     from statsig import statsig
     from statsig.statsig_user import StatsigUser

     # Initialize Statsig with your server secret key
     statsig.initialize('your_server_secret_key')
     user = StatsigUser(
       user_id = "user123", 
       email = "test@statsig.com",
     )  # Customize user info as needed
     experiment = statsig.get_experiment(user, 'your_experiment_name')
     text_to_show = experiment.get('text', 'Hello, World!')
     print(text_to_show)
     
     # Shutdown Statsig before your application exits
     statsig.shutdown()
     ```
   - Replace `'your_server_secret_key'` with your actual server secret key from Statsig.
   - Replace `'your_experiment_name'` with the name of your experiment.

### Step 3: Creating the A/B Test in Statsig Console

1. **Log Into Statsig Console**:
    - Access the Statsig Console and sign in.

2. **Create an Experiment**:
    - Navigate to the "Experiments" section and click "Create New".
    - Fill in the experiment details, including a unique key for `'your_experiment_name'`.

3. **Configure Experiment Variants**:
    - Define your variants, for example, `variant_a` and `variant_b`.
    - Add a parameter called `'text'` for each variant and configure the text you wish to display, such as "This is Control Variant" and "This is Test Variant".

    ![image](https://github.com/statsig-io/.github/assets/74588208/8a667aeb-9189-4e7d-8a22-a42dabcdfe09)

4. **Launch Your Experiment**:
    - After setting up your variants and their parameters, save your configurations and start the experiment.

By following these steps, you've set up a Python Flask application that utilizes Statsig for running an A/B test, dynamically serving different text content based on the experiment's variant. This setup enables data-driven decisions and iterative improvements based on user interactions.