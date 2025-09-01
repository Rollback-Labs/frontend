import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const FeedbackPage = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Feedback - Rollback";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast({
        title: "Feedback required",
        description: "Please enter your feedback message.",
      });
      return;
    }
    setSubmitting(true);
    const subject = encodeURIComponent(
      `Rollback Feedback${topic ? `: ${topic}` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${name || "N/A"}\nEmail: ${email || "N/A"}\nTopic: ${
        topic || "General"
      }\n\n${message}`
    );
    const mailto = `mailto:rollbacklabs@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setTopic("");
      setMessage("");
      toast({
        title: "Thanks!",
        description: "Your email client should open to send the feedback.",
      });
    }, 400);
  };

  return (
    <Layout>
      <div className="min-h-screen pt-24 pb-12">
        <section className="py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                <span className="gradient-text">We value your feedback</span>
              </h1>
              <p className="text-muted-foreground">
                Tell us how we can improve Rollback.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-sm p-6 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="topic">Topic (optional)</Label>
                <Input
                  id="topic"
                  placeholder="e.g., UX, Performance, Feature request"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="message">Your feedback</Label>
                <Textarea
                  id="message"
                  placeholder="Share your thoughts, issues, or ideas..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[140px]"
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  This opens your email app to send to rollbacklabs@gmail.com.
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="bg-rollback-primary hover:bg-rollback-primary/90 text-white"
                >
                  {submitting ? "Preparing..." : "Send Feedback"}
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FeedbackPage;
