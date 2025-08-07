import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dietary: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "¡RSVP Confirmado! / RSVP Confirmed!",
      description: "Gracias por confirmar tu asistencia. Te contactaremos pronto con más detalles. / Thank you for confirming your attendance. We'll contact you soon with more details.",
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      dietary: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-secondary/50 border-border shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="font-playfair text-2xl text-primary">RSVP</CardTitle>
        <CardDescription className="font-playfair">
          Please confirm your attendance / Por favor confirma tu asistencia
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-playfair">Name / Nombre</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="font-playfair"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="font-playfair">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="font-playfair"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="font-playfair">Phone / Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="font-playfair"
            />
          </div>
          
          
          <div className="space-y-2">
            <Label htmlFor="dietary" className="font-playfair">Dietary Requirements / Restricciones Alimentarias</Label>
            <Input
              id="dietary"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              placeholder="Optional / Opcional"
              className="font-playfair"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="font-playfair">Message / Mensaje</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Optional message for the couple / Mensaje opcional para la pareja"
              rows={3}
              className="font-playfair"
            />
          </div>
          
          <Button
            type="submit"
            variant="elegant"
            size="lg"
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending... / Enviando...' : 'Confirm Attendance / Confirmar Asistencia'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default RSVPForm;