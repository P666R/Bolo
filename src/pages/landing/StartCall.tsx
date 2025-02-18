import { showToast } from '@/components/functions/Toast';
import Button from '@/components/ui/Button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/Dialog';
import Input from '@/components/ui/Input';
import Loading from '@/components/ui/Loading';
import callService from '@/lib/callService';
import { getToast } from '@/lib/utils';
import { FormEvent, useState } from 'react';
import { MdVideoCall } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function StartCall() {
  const navigate = useNavigate();
  const [callName, setCallName] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const startCall = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const callId = await callService.createCall(callName);
      setTimeout(() => {
        setLoading(false);
        navigate(`/call/${callId}`, { state: { isCreatingCall: true } });
      }, 1000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      setIsDialogOpen(false);
      setLoading(false);
      setCallName('');
      showToast(getToast('UNABLE_TO_CREATE_CALL'));
    }
  };

  if (loading) {
    return <Loading text="Creating a call for you" />;
  }

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(open) => {
        if (!open) {
          setCallName('');
        }
        setIsDialogOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <Button className="w-72 2xl:w-auto">
          <MdVideoCall size="1.5em" /> &nbsp; Start a call
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseIcon={false}
        className="max-w-[365px] sm:max-w-[425px]"
      >
        <h3 className="text-2xl text-neutral-900 font-semibold">
          Start a new Call
        </h3>
        <form onSubmit={startCall} className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <label htmlFor="call-name" className="text-neutral-900 text-sm">
              Provide a name for your call so that your friends know what this
              call is about
            </label>
            <Input
              className="w-full"
              id="call-name"
              variant="light"
              placeholder="Enter call name"
              value={callName}
              onChange={(e) => setCallName(e.target.value)}
            />
          </div>
          <div id="footer" className="flex justify-center mt-2">
            <Button type="submit" disabled={!callName.trim()}>
              Start Call
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default StartCall;
