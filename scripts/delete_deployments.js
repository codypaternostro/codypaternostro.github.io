(async () => {
    const fetch = (await import('node-fetch')).default;
    const token = process.env.GITHUB_TOKEN;
    const owner = process.env.GITHUB_REPOSITORY_OWNER;
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
  
    const headers = {
      'Authorization': `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
    };
  
    async function deleteDeployments() {
      const deploymentsUrl = `https://api.github.com/repos/${owner}/${repo}/deployments`;
  
      try {
        // Get all deployments
        const deploymentsResponse = await fetch(deploymentsUrl, { headers });
        if (!deploymentsResponse.ok) {
          throw new Error(`Error fetching deployments: ${deploymentsResponse.statusText}`);
        }
        const deployments = await deploymentsResponse.json();
  
        // Delete each deployment
        for (const deployment of deployments) {
          // Check if the deployment can be deleted (based on your business logic)
          if (canDeleteDeployment(deployment)) {
            const deleteUrl = `https://api.github.com/repos/${owner}/${repo}/deployments/${deployment.id}`;
            const deleteResponse = await fetch(deleteUrl, { method: 'DELETE', headers });
            if (!deleteResponse.ok) {
              const errorBody = await deleteResponse.text();
              throw new Error(`Error deleting deployment ${deployment.id}: ${deleteResponse.statusText}. Response body: ${errorBody}`);
            }
            console.log(`Deleted deployment ${deployment.id}`);
          } else {
            console.log(`Skipping deletion for deployment ${deployment.id}, not in a deletable state.`);
          }
        }
      } catch (error) {
        console.error('Error in deleteDeployments:', error);
      }
    }
  
    function canDeleteDeployment(deployment) {
      // Add logic to determine if a deployment can be deleted
      // For example, check the deployment's status
      // Return true if it can be deleted, false otherwise
      return true; // Placeholder, adjust based on your criteria
    }
  
    deleteDeployments();
  })();
  