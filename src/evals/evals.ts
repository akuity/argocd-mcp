import { openai } from '@ai-sdk/openai';
import { grade, EvalFunction } from 'mcp-evals';

const listApplicationsEval: EvalFunction = {
  name: 'List Applications Evaluation',
  description: "Evaluates the model's ability to list ArgoCD applications",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      'Show me all the ArgoCD applications in the cluster.'
    );
    return JSON.parse(result);
  }
};

const getApplicationEval: EvalFunction = {
  name: 'Get Application Evaluation',
  description: "Evaluates the model's ability to retrieve a specific ArgoCD application",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "Get details for the 'my-app' application in ArgoCD."
    );
    return JSON.parse(result);
  }
};

const createApplicationEval: EvalFunction = {
  name: 'Create Application Evaluation',
  description: "Evaluates the model's ability to create a new ArgoCD application",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "Create a new ArgoCD application named 'test-app' pointing to 'https://github.com/test/repo' in the 'default' namespace."
    );
    return JSON.parse(result);
  }
};

const updateApplicationEval: EvalFunction = {
  name: 'Update Application Evaluation',
  description: "Evaluates the model's ability to update an existing ArgoCD application",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "Update the 'test-app' ArgoCD application to point to the 'main' branch instead of 'master'."
    );
    return JSON.parse(result);
  }
};

const deleteApplicationEval: EvalFunction = {
  name: 'Delete Application Evaluation',
  description: "Evaluates the model's ability to delete an ArgoCD application",
  run: async () => {
    const result = await grade(openai('gpt-4'), "Delete the 'test-app' application from ArgoCD.");
    return JSON.parse(result);
  }
};

const syncApplicationEval: EvalFunction = {
  name: 'Sync Application Evaluation',
  description: "Evaluates the model's ability to sync an ArgoCD application",
  run: async () => {
    const result = await grade(openai('gpt-4'), "Sync the 'my-app' application in ArgoCD.");
    return JSON.parse(result);
  }
};

const getApplicationResourceTreeEval: EvalFunction = {
  name: 'Get Application Resource Tree Evaluation',
  description:
    "Evaluates the model's ability to retrieve the resource tree for an ArgoCD application",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "Show me the resource tree for the 'my-app' application in ArgoCD."
    );
    return JSON.parse(result);
  }
};

const getApplicationManagedResourcesEval: EvalFunction = {
  name: 'Get Application Managed Resources Evaluation',
  description:
    "Evaluates the model's ability to retrieve managed resources for an ArgoCD application",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "What resources are managed by the 'my-app' application in ArgoCD?"
    );
    return JSON.parse(result);
  }
};

const getApplicationWorkloadLogsEval: EvalFunction = {
  name: 'Get Application Workload Logs Evaluation',
  description: "Evaluates the model's ability to retrieve logs for an ArgoCD application workload",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "Show me the logs for the 'web' deployment in the 'my-app' application."
    );
    return JSON.parse(result);
  }
};

const getApplicationEventsEval: EvalFunction = {
  name: 'Get Application Events Evaluation',
  description: "Evaluates the model's ability to retrieve events for an ArgoCD application",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "What events have occurred for the 'my-app' application in ArgoCD?"
    );
    return JSON.parse(result);
  }
};

const getResourceEventsEval: EvalFunction = {
  name: 'Get Resource Events Evaluation',
  description:
    "Evaluates the model's ability to retrieve events for a resource within an ArgoCD application",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "Show me the events for the 'web' deployment in the 'my-app' application."
    );
    return JSON.parse(result);
  }
};

const getResourceActionsEval: EvalFunction = {
  name: 'Get Resource Actions Evaluation',
  description: "Evaluates the model's ability to retrieve available actions for a resource",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "What actions can I perform on the 'database' StatefulSet in the 'my-app' application?"
    );
    return JSON.parse(result);
  }
};

const runResourceActionEval: EvalFunction = {
  name: 'Run Resource Action Evaluation',
  description: "Evaluates the model's ability to run an action on a resource",
  run: async () => {
    const result = await grade(
      openai('gpt-4'),
      "Restart the 'web' deployment in the 'my-app' application."
    );
    return JSON.parse(result);
  }
};

export const evalConfig = {
  model: openai('gpt-4'),
  evals: [
    listApplicationsEval,
    getApplicationEval,
    createApplicationEval,
    updateApplicationEval,
    deleteApplicationEval,
    syncApplicationEval,
    getApplicationResourceTreeEval,
    getApplicationManagedResourcesEval,
    getApplicationWorkloadLogsEval,
    getApplicationEventsEval,
    getResourceEventsEval,
    getResourceActionsEval,
    runResourceActionEval
  ]
};
