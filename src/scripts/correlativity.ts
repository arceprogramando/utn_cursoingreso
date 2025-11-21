import type { Correlativity } from '@/types/correlativity';
import getMotivationalPhrase from '@/utils/getMotivationalPhrase';

interface SubjectState extends Correlativity {
  isPassed: boolean;
}

function initCorrelativityPage(): void {
  const dataElement = document.getElementById('correlativity-data');
  if (!dataElement?.textContent) return;

  const subjectsState: SubjectState[] = JSON.parse(dataElement.textContent).map(
    (subject: Correlativity) => ({
      ...subject,
      prerequisites: Array.isArray(subject.prerequisites) ? subject.prerequisites : [],
      hours: typeof subject.hours === 'number' ? subject.hours : 0,
      isPassed: false,
    })
  );

  const subjectsMap = new Map(subjectsState.map((subject) => [String(subject.id), subject]));
  const totalSubjects = subjectsState.length;
  const totalPlanHours = subjectsState.reduce((total, subject) => total + subject.hours, 0);

  // DOM Elements
  const progressPercentageEl = document.querySelector<HTMLElement>('[data-progress-percentage]');
  const progressBarEl = document.querySelector<HTMLElement>('[data-progress-bar]');
  const motivationalEl = document.querySelector<HTMLElement>('[data-motivational]');
  const hoursCompletedEl = document.querySelector<HTMLElement>('[data-hours-completed]');
  const hoursMissingEl = document.querySelector<HTMLElement>('[data-hours-missing]');

  function updateProgress(): void {
    const passedCount = subjectsState.filter((subject) => subject.isPassed).length;
    const percentage = totalSubjects > 0 ? (passedCount / totalSubjects) * 100 : 0;

    const completedHours = subjectsState.reduce(
      (total, subject) => (subject.isPassed ? total + subject.hours : total),
      0
    );
    const missingHours = Math.max(totalPlanHours - completedHours, 0);

    if (progressPercentageEl) progressPercentageEl.textContent = percentage.toFixed(1);
    if (progressBarEl) progressBarEl.style.width = `${percentage}%`;
    if (hoursCompletedEl) hoursCompletedEl.textContent = completedHours.toString();
    if (hoursMissingEl) hoursMissingEl.textContent = missingHours.toString();
    if (motivationalEl) motivationalEl.textContent = getMotivationalPhrase(percentage);
  }

  function updateRowState(subjectId: string, isApproved: boolean): void {
    const row = document.querySelector(`[data-subject-row="${subjectId}"]`);
    if (!row) return;

    row.classList.toggle('subject-row--approved', isApproved);
    row.classList.toggle('subject-row--pending', !isApproved);
  }

  function updatePrerequisitePills(): void {
    document.querySelectorAll<HTMLElement>('[data-prereq-pill]').forEach((pill) => {
      const prereqId = pill.getAttribute('data-prereq-id');
      if (!prereqId) return;

      const prereqSubject = subjectsMap.get(prereqId);
      const isMet = prereqSubject?.isPassed ?? false;

      pill.classList.toggle('prereq-pill--met', isMet);
      pill.classList.toggle('prereq-pill--pending', !isMet);
    });
  }

  // Event Listeners
  document.querySelectorAll<HTMLInputElement>('[data-subject-checkbox]').forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
      const target = event.currentTarget as HTMLInputElement;
      const subjectId = target.getAttribute('data-subject-id');
      if (!subjectId) return;

      const subject = subjectsMap.get(subjectId);
      if (!subject) return;

      subject.isPassed = target.checked;
      updateRowState(subjectId, subject.isPassed);
      updateProgress();
      updatePrerequisitePills();
    });
  });

  // Initial state
  updateProgress();
  updatePrerequisitePills();
}

// Initialize when DOM is ready
initCorrelativityPage();
