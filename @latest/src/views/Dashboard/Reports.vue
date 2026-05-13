<template>
  <div class="reports-wrapper">
    <!-- Action Bar Header -->
    <header class="reports-header">
      <h1 class="page-title">Reports</h1>
      <div class="actions-row">
        <button class="generate-btn">Generate Report</button>
        <div class="dropdown-wrapper">
          <select class="time-select">
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
          </select>
        </div>
      </div>
    </header>

    <!-- Two-Column Summaries Row -->
    <section class="summary-grid">
      <!-- Project Performance Progress Indicators -->
      <div class="summary-card">
        <h3>Project Performance</h3>
        <div class="stat-list">
          <div class="stat-row">
            <span class="stat-label">Completed on Time</span>
            <span class="badge success">87%</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">Client Satisfaction</span>
            <span class="badge success">92%</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">Budget Adherence</span>
            <span class="badge warning">78%</span>
          </div>
        </div>
      </div>

      <!-- Financial Statements Matrix -->
      <div class="summary-card">
        <h3>Financial Summary</h3>
        <div class="stat-list">
          <div class="stat-row">
            <span class="stat-label">Total Revenue</span>
            <span class="amount">$145,680</span>
          </div>
          <div class="stat-row">
            <span class="stat-label">Expenses</span>
            <span class="amount">$87,290</span>
          </div>
          <div class="stat-row divider">
            <span class="stat-label bold">Net Profit</span>
            <span class="amount profit bold">$58,390</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Downloadable Available Logs Section -->
    <section class="downloads-card">
      <h2>Available Reports</h2>
      <div class="report-log-list">
        <div class="log-item">
          <div class="log-info">
            <p class="log-title">Monthly Performance Report - April 2026</p>
            <span class="log-date">Generated on May 1, 2026</span>
          </div>
          <a href="#" @click.prevent class="download-link">Download</a>
        </div>

        <div class="log-item">
          <div class="log-info">
            <p class="log-title">Client Analytics Q1 2026</p>
            <span class="log-date">Generated on April 1, 2026</span>
          </div>
          <a href="#" @click.prevent class="download-link">Download</a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.reports-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  font-family: sans-serif;
}

.reports-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-title {
  font-size: 2.5rem;
  color: #111111;
  margin: 0;
  font-weight: 700;
}

.actions-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.generate-btn {
  background-color: #1a73e8;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.generate-btn:hover {
  background-color: #155cb4;
}

.time-select {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: #333333;
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  padding-right: 2.5rem;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='w3.org' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23666666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.2rem;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.summary-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
}

.summary-card h3 {
  font-size: 1.25rem;
  color: #111111;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.stat-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.stat-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.05rem;
  color: #444444;
}

.stat-row.divider {
  border-top: 1px solid #f0f0f0;
  padding-top: 1.25rem;
  margin-top: 0.25rem;
}

.bold {
  font-weight: 600;
}

.amount {
  color: #111111;
  font-weight: 500;
}

.amount.profit {
  color: #1aa260;
}

.badge {
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.badge.success {
  background-color: #e6f6ee;
  color: #1aa260;
}

.badge.warning {
  background-color: #fef7e0;
  color: #b06000;
}

.downloads-card {
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.01);
}

.downloads-card h2 {
  font-size: 1.5rem;
  color: #111111;
  margin-top: 0;
  margin-bottom: 2rem;
  font-weight: 600;
}

.report-log-list {
  display: flex;
  flex-direction: column;
}

.log-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
  border-bottom: 1px solid #f0f0f0;
}

.log-item:first-child {
  padding-top: 0;
}

.log-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.log-title {
  font-size: 1.1rem;
  color: #111111;
  margin: 0 0 0.4rem 0;
}

.log-date {
  font-size: 0.9rem;
  color: #777777;
}

.download-link {
  color: #1a73e8;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.15s;
}

.download-link:hover {
  color: #155cb4;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .reports-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
  .summary-grid {
    grid-template-columns: 1fr;
  }
}
</style>
