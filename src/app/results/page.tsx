export default function ResultsPage() {
  return (
    <main style={{ padding: "120px 24px", maxWidth: 900 }}>
      <h1 style={{ fontSize: 48, marginBottom: 60 }}>
        Representative Results
      </h1>

      <div style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 22 }}>
          Dismissed Federal Charges
        </h2>
        <p style={{ opacity: 0.7, marginTop: 12 }}>
          Achieved full dismissal prior to trial.
        </p>
      </div>

      <div>
        <h2 style={{ fontSize: 22 }}>
          Jury Trial Acquittal
        </h2>
        <p style={{ opacity: 0.7, marginTop: 12 }}>
          Complete acquittal on all felony counts.
        </p>
      </div>
    </main>
  );
}
