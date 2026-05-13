<template>
  <div class="overview-container">
    
    <!-- ========================================== -->
    <!-- 1. CLIENT ROUTE VIEW DASHBOARD PANEL LAYER -->
    <!-- ========================================== -->
    <div v-if="currentSession.role === 'client'" class="role-view">
      <header class="view-header">
        <h1>Client Project Board</h1>
        <p>Welcome back, <strong>{{ currentSession.name }}</strong> ({{ currentSession.company }})</p>
      </header>

      <!-- Client Metrics Metrics Grid Row -->
      <section class="grid-three">
        <div class="metric-card">
          <span class="label">Total Tasks Assigned</span>
          <div class="value">18</div>
        </div>
        <div class="metric-card">
          <span class="label">Completed Deliverables</span>
          <div class="value green-text">14</div>
        </div>
        <div class="metric-card">
          <span class="label">Current Overall Progress</span>
          <div class="value">77%</div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: 77%"></div>
          </div>
        </div>
      </section>

      <!-- Active Client Projects Section Grid -->
      <section class="content-block">
        <h2>Active Project Tracks</h2>
        <div class="project-list-grid">
          <div class="project-item-card">
            <div class="card-top">
              <h3>E-Commerce Storefront Redesign</h3>
              <span class="status-pill warning">In Development</span>
            </div>
            <p>Complete front-end architectural migration onto Vue 3 and Vite components.</p>
            <div class="progress-bar-container"><div class="progress-bar-fill" style="width: 60%"></div></div>
            <span class="eta-text">Estimated Delivery: June 15, 2026</span>
          </div>

          <div class="project-item-card">
            <div class="card-top">
              <h3>Q2 Marketing Media Assets Campaign</h3>
              <span class="status-pill success">Approved</span>
            </div>
            <p>Production execution parameters for localized digital promotional advertisements.</p>
            <div class="progress-bar-container"><div class="progress-bar-fill" style="width: 100%"></div></div>
            <span class="eta-text">Completed: May 10, 2026</span>
          </div>
        </div>
      </section>

      <!-- Dedicated Tasks Progress Tracking List Table Row -->
      <section class="content-block">
        <h2>Assigned Action Tasks Log</h2>
        <div class="table-wrapper">
          <table class="data-table">
            <thead>
              <tr>
                <th>Task Description</th>
                <th>Assigned Agent</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Provide API Gateway Endpoint Parameters</strong></td>
                <td>Marcus Vance</td>
                <td>May 18, 2026</td>
                <td><span class="status-pill danger">Action Required</span></td>
              </tr>
              <tr>
                <td>Review Figma Wireframe Prototype Copy Blocks</td>
                <td>Elena Rostova</td>
                <td>May 22, 2026</td>
                <td><span class="status-pill warning">In Review</span></td>
              </tr>
              <tr>
                <td>Verify Database Migration Testing Schemes</td>
                <td>Marcus Vance</td>
                <td>May 30, 2026</td>
                <td><span class="status-pill muted">Pending Start</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>

    <!-- ========================================== -->
    <!-- 2. SYSTEM ADMIN DASHBOARD WORKSPACE PANEL  -->
    <!-- ========================================== -->
    <div v-else-if="currentSession.role === 'admin'" class="role-view">
      <header class="view-header">
        <h1>System Administration Panel</h1>
        <p>Enterprise Infrastructure, Security Policies, Operations Logs Control</p>
      </header>

      <!-- Admin Status Metrics Grid Row -->
      <section class="grid-three">
        <div class="metric-card">
          <span class="label">Global Operational Nodes</span>
          <div class="value green-text">100% Operational</div>
        </div>
        <div class="metric-card">
          <span class="label">Total System Exceptions</span>
          <div class="value security-ok">0 Errors</div>
        </div>
        <div class="metric-card">
          <span class="label">Database Queries Latency</span>
          <div class="value">14ms</div>
        </div>
      </section>

      <!-- System Health Diagnostics Activity Row -->
      <section class="content-block">
        <h2>System Operations Audit Logs Tracker</h2>
        <div class="table-wrapper">
          <table class="data-table admin-mode">
            <thead>
              <tr>
                <th>Log Timestamp</th>
                <th>Event Origin Context</th>
                <th>Severity Classification</th>
                <th>Operation Context Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026-05-13 12:40:11</td>
                <td>SSL Security Layer Certification Handshake Renewed</td>
                <td><span class="status-pill info">INFO</span></td>
                <td><button class="text-action">View Block</button></td>
              </tr>
              <tr>
                <td>2026-05-13 11:15:43</td>
                <td>High Memory Workspace Cluster Threshold Autoscaled</td>
                <td><span class="status-pill warning">WARN</span></td>
                <td><button class="text-action">Inspect Cluster</button></td>
              </tr>
              <tr>
                <td>2026-05-13 09:02:18</td>
                <td>Database Cluster Ledger Node Hot Snapshot Successfully Flushed</td>
                <td><span class="status-pill info">INFO</span></td>
                <td><button class="text-action">Download Manifest</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>

    <!-- ========================================== -->
    <!-- 3. STANDARD AGENT / MANAGER RECORD PANEL  -->
    <!-- ========================================== -->
    <div v-else class="role-view">
      <header class="view-header">
        <h1>Agent Operations Hub</h1>
        <p>Account Portfolio Oversight, Operational Deliverables Performance Tracking</p>
      </header>
      
      <section class="grid-three">
        <div class="metric-card">
          <span class="label">Managed Client Accounts</span>
          <div class="value">12 Accounts</div>
        </div>
        <div class="metric-card">
          <span class="label">Open Team Pipelines</span>
          <div class="value">34 Targets</div>
        </div>
        <div class="metric-card">
          <span class="label">Billable Utilization Track</span>
          <div class="value green-text">91.4%</div>
        </div>
      </section>
    </div>

  </div>
</template>

<script setup lang="ts">
import { currentSession } from '../../router/store'
</script>

<style scoped>
.overview-container {
  display: flex;
  flex-direction: column;
}

.view-header {
  margin-bottom: 2.5rem;
}

.view-header h1 {
  font-size: 2.25rem;
  color: #111111;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.view-header p {
  color: #666666;
  font-size: 1.1rem;
  margin: 0;
}

.grid-three {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.metric-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
}

.metric-card .label {
  font-size: 0.95rem;
  color: #666666;
  font-weight: 500;
}

.metric-card .value {
  font-size: 2.25rem;
  font-weight: 700;
  color: #111111;
  margin-top: 0.5rem;
}

.green-text { color: #1aa260 !important; }
.security-ok { color: #1aa260 !important; }

/* Progress Element styling rules */
.progress-bar-container {
  background-color: #f0f0f0;
  height: 6px;
  border-radius: 100px;
  margin-top: 1rem;
  overflow: hidden;
  width: 100%;
}

.progress-bar-fill {
  background-color: #1a73e8;
  height: 100%;
  border-radius: 100px;
}

.content-block {
  margin-bottom: 3.5rem;
}

.content-block h2 {
  font-size: 1.5rem;
  color: #111111;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.project-list-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-item-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.card-top h3 {
  font-size: 1.2rem;
  margin: 0;
  color: #111111;
  font-weight: 600;
}

.project-item-card p {
  color: #555555;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
}

.eta-text {
  display: block;
  font-size: 0.85rem;
  color: #888888;
  margin-top: 1rem;
  font-weight: 500;
}

/* Status Pill Indicators configuration styling rules */
.status-pill {
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.status-pill.warning { background-color: #fef7e0; color: #b06000; }
.status-pill.success { background-color: #e6f6ee; color: #1aa260; }
.status-pill.danger { background-color: #fce8e6; color: #c5221f; }
.status-pill.muted { background-color: #f1f3f4; color: #5f6368; }
.status-pill.info { background-color: #e8f0fe; color: #1a73e8; }

/* Operational Ledger Data Table configuration styles */
.table-wrapper {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
}

.data-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.95rem;
}

.data-table th {
  background-color: #f8f9fa;
  padding: 1.2rem 1.5rem;
  font-weight: 600;
  color: #444444;
  border-bottom: 1px solid #eaeaea;
}

.data-table td {
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  color: #333333;
}

.data-table tr:last-child td {
  border-bottom: none;
}

.text-action {
  background: none;
  border: none;
  color: #1a73e8;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  font-size: 0.9rem;
}

.text-action:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .grid-three, .project-list-grid { grid-template-columns: 1fr; }
}
</style>
