// notes.js - Full HRM Unit 1 Notes

function toggle(header) {
    const body = header.nextElementSibling;
    body.classList.toggle('open');
}

function expandAll() {
    document.querySelectorAll('.topic-body').forEach(body => {
        body.classList.add('open');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('notes-container');

    container.innerHTML = `
        <!-- ==================== TOPIC 1 ==================== -->
        <div class="topic-card">
            <div class="topic-header" onclick="toggle(this)">
                <h2>1. Introduction to HRM</h2>
                <span>Topic 01</span>
            </div>
            <div class="topic-body">
                <div class="def-box"><strong>Definition:</strong> HRM is the process of recruiting, selecting, training, developing, compensating, and maintaining employees to achieve organizational goals effectively.</div>
                <h3>Evolution of HRM</h3>
                <table>
                    <tr><th>Era</th><th>Focus</th><th>Called</th></tr>
                    <tr><td>Pre-Industrial</td><td>Craft guilds, apprenticeships</td><td>—</td></tr>
                    <tr><td>Industrial Revolution</td><td>Labour welfare</td><td>Personnel Management</td></tr>
                    <tr><td>Post-WWII</td><td>Industrial relations</td><td>Industrial Relations</td></tr>
                    <tr><td>1980s onward</td><td>Strategic integration</td><td>Human Resource Management</td></tr>
                </table>
                <h3>Nature of HRM</h3>
                <ul>
                    <li>Pervasive — present in all organizations</li>
                    <li>People-oriented — focuses on human beings</li>
                    <li>Action-oriented — emphasizes solutions, not records</li>
                    <li>Future-oriented — plans for long-term needs</li>
                    <li>Development-oriented — grows employee skills</li>
                    <li>Integrated — linked to overall strategy</li>
                </ul>
                <h3>Objectives of HRM</h3>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:15px;">
                    <div style="background:rgba(255,255,255,0.1); padding:15px; border-radius:10px;"><strong>Organizational</strong><br>Achieve corporate goals</div>
                    <div style="background:rgba(255,255,255,0.1); padding:15px; border-radius:10px;"><strong>Functional</strong><br>Maintain HR contribution</div>
                    <div style="background:rgba(255,255,255,0.1); padding:15px; border-radius:10px;"><strong>Societal</strong><br>Respond ethically to society</div>
                    <div style="background:rgba(255,255,255,0.1); padding:15px; border-radius:10px;"><strong>Personal</strong><br>Help employees achieve goals</div>
                </div>
                <div class="exam-box"><strong>⭐ Exam Point:</strong> The difference between HRM and Personnel Management is a very frequently asked 5-mark question.</div>
            </div>
        </div>

        <!-- ==================== TOPIC 2 ==================== -->
        <div class="topic-card">
            <div class="topic-header" onclick="toggle(this)">
                <h2>2. Line Managers & HR</h2>
                <span>Topic 02</span>
            </div>
            <div class="topic-body">
                <div class="def-box"><strong>Line Manager:</strong> A manager directly responsible for achieving organizational goals and managing employees in their team.</div>
                <h3>Role of Line Managers in HRM</h3>
                <ul>
                    <li>Interviewing and selecting new hires</li>
                    <li>Orienting and training employees</li>
                    <li>Setting performance targets</li>
                    <li>Conducting performance appraisals</li>
                    <li>Handling grievances and discipline</li>
                </ul>
                <div class="exam-box"><strong>⭐ Exam Point:</strong> "Line managers are the real implementers of HR policy."</div>
            </div>
        </div>

        <!-- ==================== TOPIC 3 to 14 ==================== -->
        <!-- You can continue adding the remaining topics in the same format -->

        <div class="topic-card">
            <div class="topic-header" onclick="toggle(this)">
                <h2>3. HR Roles & Responsibilities</h2>
                <span>Topic 03</span>
            </div>
            <div class="topic-body">
                <p>Dave Ulrich's 4 Role Model and other content goes here...</p>
            </div>
        </div>

        <!-- Repeat this block for Topics 4 to 14 -->
        <!-- Example for last topic -->
        <div class="topic-card">
            <div class="topic-header" onclick="toggle(this)">
                <h2>14. Human Resource Information System (HRIS)</h2>
                <span>Topic 14</span>
            </div>
            <div class="topic-body">
                <div class="def-box"><strong>HRIS:</strong> A software system used to collect, store, manage, and process employee data.</div>
                <!-- Add full content -->
            </div>
        </div>
    `;
});