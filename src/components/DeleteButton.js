// Component for an easier delete button that shows up on each entry.
// Meant to be easier than using the delete in the modal

// Used DeleteIcon and IconButton from mui and imported delete handler written in mutations.
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteEntry } from '../utils/mutations';
import IconButton from '@mui/material/IconButton';

// Uses the entryid to delete the specific entry the user clicks on
export default function DeleteButton({ entryid}) {

    const handleDelete = () => {
        deleteEntry(entryid).catch(console.error);
    }
    return <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>;

}
