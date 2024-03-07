---
title: How to run an AB Test in Python
sidebar_label: First AB Test in Python
slug: /developer-guides/abtest-in-python
---

Running a simple A/B experiment in a web page with Python and the Statsig SDK involves a few distinct steps, including creating a basic web server, integrating with Statsig for A/B testing, and configuring the experiment via the Statsig console. Below is a step-by-step guide.

### Step 1: Create a Basic Python Web Server

First, you'll need a simple Python web server. Flask is a lightweight WSGI web application framework that's perfect for this purpose.

1. **Set Up Your Python Environment**:
    - Ensure Python 3 is installed on your system.
    - Create a new directory for your project, navigate into it, and set up a virtual environment:
      ```bash
      python3 -m venv venv
      source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
      ```

2. **Install Flask**:
    - Install Flask within your virtual environment:
      ```bash
      pip install Flask
      ```

3. **Create Your Flask App**:
    - In your project directory, create a file named `app.py`.
    - Add the following code to create a simple web server:
      ```python
      from flask import Flask
      app = Flask(__name__)

      @app.route('/')
      def hello_world():
          return 'Hello, World!'

      if __name__ == '__main__':
          app.run(debug=True)
      ```

### Step 2: Integrate Statsig for A/B Testing

1. **Install Statsig SDK**:
    - Add the Statsig SDK to your project:
      ```bash
      pip install statsig
      ```

2. **Update Your Flask App for A/B Testing**:
    - Modify `app.py` to use the Statsig SDK. You'll need to initialize Statsig and then use it within your route to determine which content to serve based on the A/B test configuration.
    - Ensure to replace `'your-server-secret-key'` with your actual Statsig server-side SDK key and `'your_experiment_name'` with the name of your experiment.
      ```python
      from flask import Flask
      import statsig

      app = Flask(__name__)

      statsig.initialize('your-server-secret-key')

      @app.route('/')
      def hello_world():
          user = {"userID": "user123"}  # Customize user info as needed
          experiment = statsig.get_experiment(user, 'your_experiment_name')
          text_to_show = experiment.get_value('text', 'Hello, World!')
          return f'<h1>{text_to_show}</h1>'

      if __name__ == '__main__':
          app.run(debug=True)
      ```

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